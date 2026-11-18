(function () {
  'use strict';

  const sidebar = document.getElementById('documentation-sidebar');
  if (!sidebar) return;

  const search = sidebar.querySelector('input[type="search"]');
  const status = sidebar.querySelector('.documentation-search-status');
  const menuButton = document.querySelector('.documentation-menu-toggle');
  const closeButton = sidebar.querySelector('.documentation-sidebar-hide');
  const backdrop = document.querySelector('.documentation-backdrop');
  const mobile = window.matchMedia('(max-width: 900px)');
  const toggles = [...sidebar.querySelectorAll('.documentation-tree-toggle')];
  const storageKey = 'avpm.documentation.expanded';
  let stored = {};
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (value && typeof value === 'object' && !Array.isArray(value)) stored = value;
  } catch (_) { /* Navigation also works when local storage is unavailable. */ }

  const expanded = new Map();
  function setExpanded(button, open) {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', `${open ? 'Свернуть' : 'Развернуть'} раздел «${button.dataset.title}»`);
    document.getElementById(button.getAttribute('aria-controls')).hidden = !open;
  }

  for (const button of toggles) {
    const containsCurrentPage = !!button.closest('li').querySelector('[aria-current="page"]');
    const open = containsCurrentPage || stored[button.dataset.page] === true;
    expanded.set(button.dataset.page, open);
    setExpanded(button, open);
  }

  sidebar.addEventListener('click', function (event) {
    const button = event.target.closest('.documentation-tree-toggle');
    if (!button) return;
    const open = button.getAttribute('aria-expanded') !== 'true';
    setExpanded(button, open);
    if (!search.value.trim()) {
      expanded.set(button.dataset.page, open);
      try { localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(expanded))); } catch (_) { /* Optional persistence. */ }
    }
  });

  const normalize = text => text.normalize('NFKC').toLocaleLowerCase('ru').replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
  search.addEventListener('input', function () {
    const query = normalize(search.value);
    let matches = 0;
    function filter(list, ancestorMatch) {
      let visible = false;
      for (const item of list.children) {
        const ownMatch = !!query && normalize(item.dataset.title).includes(query);
        if (ownMatch) matches++;
        const children = item.querySelector(':scope > ul');
        const childMatch = children ? filter(children, ancestorMatch || ownMatch) : false;
        const show = !query || ownMatch || ancestorMatch || childMatch;
        item.hidden = !show;
        const button = item.querySelector(':scope > .documentation-tree-row > button');
        if (button) setExpanded(button, query ? show : expanded.get(button.dataset.page));
        visible = visible || show;
      }
      return visible;
    }
    filter(sidebar.querySelector('.documentation-tree'), false);
    status.textContent = query ? (matches ? `Найдено страниц: ${matches}` : 'Ничего не найдено') : '';
  });

  function setMenu(open, returnFocus) {
    document.body.classList.toggle('documentation-sidebar-open', mobile.matches && open);
    document.body.classList.toggle('documentation-sidebar-collapsed', !mobile.matches && !open);
    menuButton.setAttribute('aria-expanded', String(open));
    sidebar.inert = !open;
    if (returnFocus) menuButton.focus();
  }

  menuButton.addEventListener('click', function () {
    setMenu(true, false);
    search.focus();
  });
  closeButton.addEventListener('click', () => setMenu(false, true));
  backdrop.addEventListener('click', () => setMenu(false, true));
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (search.value && sidebar.contains(document.activeElement)) {
        search.value = '';
        search.dispatchEvent(new Event('input'));
      } else if (mobile.matches && document.body.classList.contains('documentation-sidebar-open')) {
        setMenu(false, true);
      }
    }
  });
  mobile.addEventListener('change', () => setMenu(!mobile.matches, false));
  setMenu(!mobile.matches, false);

  const current = sidebar.querySelector('[aria-current="page"]');
  if (current && !mobile.matches) {
    const navigation = sidebar.querySelector('.documentation-navigation');
    navigation.scrollTop = Math.max(0, current.getBoundingClientRect().top - navigation.getBoundingClientRect().top - navigation.clientHeight / 2);
  }
})();
