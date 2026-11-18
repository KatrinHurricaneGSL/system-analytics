document.addEventListener('click', function (event) {
  const button = event.target.closest('.plantuml-code-toggle');
  if (!button) return;

  const preview = document.getElementById(button.getAttribute('aria-controls'));
  if (!preview) return;

  const expanded = button.getAttribute('aria-expanded') !== 'true';
  preview.hidden = !expanded;
  button.setAttribute('aria-expanded', String(expanded));
  button.textContent = expanded ? 'Скрыть код' : 'Показать код';
});
