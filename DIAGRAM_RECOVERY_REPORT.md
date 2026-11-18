# Восстановление диаграмм Confluence

Дата: 18 ноября 2026 года. Пространство экспорта: AVPM. Источник: https://katerinapopova.atlassian.net/wiki.

Восстановлены **42 диаграммы на 42 страницах**: 41 контракт API и шаблон API. Невосстановленных диаграмм среди обнаруженных макросов PlantUML: **0**.

## Что проверено

- Просмотрены все 71 HTML-файлов экспорта, включая index.html. Для 70 страниц найдены оригиналы в Confluence: идентификатор из имени файла и заголовок совпадают. index.html — локальное оглавление экспорта.
- Проверен исходный storage-формат всех этих страниц через Atlassian MCP: найдены 42 расширения с PlantUML. Фолбэк-копии макросов не считались отдельными диаграммами. На остальных страницах макросы с PlantUML не обнаружены.
- Проверены текущие вложения каждой из 42 страниц: списки пустые, готовых PNG/SVG нет. На проверочной странице 18022718 серверный body.view, как и экспорт, содержал пустой параграф; resolveConfluenceContentMacros вернул пустой список.
- Из параметра source каждого макроса извлечён оригинальный код, с декодированием XML-сущностей. Содержимое диаграмм не дополнялось и не переписывалось. Код сохранён в assets/diagrams/*.puml.
- SVG сгенерированы локально официальным PlantUML 1.2026.10 в режиме SANDBOX, запрещающем сетевой доступ из рендерера. Использована уже установленная Java из Android Studio. На сторонние сервисы исходники и изображения не передавались.
- В HTML заменён только пустой параграф непосредственно после соответствующего заголовка с проверкой local-id. Изображения подключены относительными путями assets/diagrams/*.svg; нажатие открывает полный размер.

## Восстановленные диаграммы

| ID страницы | Локальная страница | Версия оригинала | Файлы |
| --- | --- | --- | --- |
| 393346 | [Шаблон API](./393346.html) | 12 | [SVG](./assets/diagrams/393346-1.svg) · [PlantUML](./assets/diagrams/393346-1.puml) |
| 15335492 | [GET /api/project-charters/{id}/versions](./15335492.html) | 2 | [SVG](./assets/diagrams/15335492-1.svg) · [PlantUML](./assets/diagrams/15335492-1.puml) |
| 16023563 | [GET /api/project-charters/{id}/approval-flow](./16023563.html) | 7 | [SVG](./assets/diagrams/16023563-1.svg) · [PlantUML](./assets/diagrams/16023563-1.puml) |
| 16056326 | [POST /api/project-charters](./16056326.html) | 3 | [SVG](./assets/diagrams/16056326-1.svg) · [PlantUML](./assets/diagrams/16056326-1.puml) |
| 16187404 | [GET /api/project-charters/{id}/approval-journal](./16187404.html) | 6 | [SVG](./assets/diagrams/16187404-1.svg) · [PlantUML](./assets/diagrams/16187404-1.puml) |
| 16416826 | [GET /api/project-charters/{id}/versions/{version}](./16416826.html) | 3 | [SVG](./assets/diagrams/16416826-1.svg) · [PlantUML](./assets/diagrams/16416826-1.puml) |
| 16842787 | [GET /api/project-charters/{id}/comments](./16842787.html) | 3 | [SVG](./assets/diagrams/16842787-1.svg) · [PlantUML](./assets/diagrams/16842787-1.puml) |
| 16875528 | [POST /api/project-charters/{id}/create-project](./16875528.html) | 4 | [SVG](./assets/diagrams/16875528-1.svg) · [PlantUML](./assets/diagrams/16875528-1.puml) |
| 16973842 | [POST /api/project-charters/{id}/approve](./16973842.html) | 5 | [SVG](./assets/diagrams/16973842-1.svg) · [PlantUML](./assets/diagrams/16973842-1.puml) |
| 17072129 | [POST /api/project-charters/{id}/comments](./17072129.html) | 9 | [SVG](./assets/diagrams/17072129-1.svg) · [PlantUML](./assets/diagrams/17072129-1.puml) |
| 17432585 | [POST /api/project-charters/{id}/submit](./17432585.html) | 2 | [SVG](./assets/diagrams/17432585-1.svg) · [PlantUML](./assets/diagrams/17432585-1.puml) |
| 17432642 | [GET /api/projects](./17432642.html) | 3 | [SVG](./assets/diagrams/17432642-1.svg) · [PlantUML](./assets/diagrams/17432642-1.puml) |
| 17465428 | [DELETE /api/projects/{id}](./17465428.html) | 2 | [SVG](./assets/diagrams/17465428-1.svg) · [PlantUML](./assets/diagrams/17465428-1.puml) |
| 17530888 | [PUT /api/project-charters/{id}](./17530888.html) | 3 | [SVG](./assets/diagrams/17530888-1.svg) · [PlantUML](./assets/diagrams/17530888-1.puml) |
| 17531024 | [PUT /api/projects/{id}](./17531024.html) | 3 | [SVG](./assets/diagrams/17531024-1.svg) · [PlantUML](./assets/diagrams/17531024-1.puml) |
| 17531140 | [GET /api/boards](./17531140.html) | 2 | [SVG](./assets/diagrams/17531140-1.svg) · [PlantUML](./assets/diagrams/17531140-1.puml) |
| 17531150 | [GET /api/boards/{id}](./17531150.html) | 1 | [SVG](./assets/diagrams/17531150-1.svg) · [PlantUML](./assets/diagrams/17531150-1.puml) |
| 17531182 | [DELETE /api/boards/{id}](./17531182.html) | 1 | [SVG](./assets/diagrams/17531182-1.svg) · [PlantUML](./assets/diagrams/17531182-1.puml) |
| 17531218 | [GET /api/tasks/column/{columnId}](./17531218.html) | 1 | [SVG](./assets/diagrams/17531218-1.svg) · [PlantUML](./assets/diagrams/17531218-1.puml) |
| 17563649 | [GET /api/project-charters/{id}](./17563649.html) | 2 | [SVG](./assets/diagrams/17563649-1.svg) · [PlantUML](./assets/diagrams/17563649-1.puml) |
| 17596497 | [GET /api/projects/{id}](./17596497.html) | 2 | [SVG](./assets/diagrams/17596497-1.svg) · [PlantUML](./assets/diagrams/17596497-1.puml) |
| 17793025 | [GET /api/project-charters](./17793025.html) | 2 | [SVG](./assets/diagrams/17793025-1.svg) · [PlantUML](./assets/diagrams/17793025-1.puml) |
| 17793035 | [POST /api/project-charters/{id}/reject](./17793035.html) | 3 | [SVG](./assets/diagrams/17793035-1.svg) · [PlantUML](./assets/diagrams/17793035-1.puml) |
| 17825795 | [GET /api/project-charters/users](./17825795.html) | 1 | [SVG](./assets/diagrams/17825795-1.svg) · [PlantUML](./assets/diagrams/17825795-1.puml) |
| 17989702 | [GET /api/projects/{projectId}/boards](./17989702.html) | 2 | [SVG](./assets/diagrams/17989702-1.svg) · [PlantUML](./assets/diagrams/17989702-1.puml) |
| 18022506 | [GET /api/projects/{projectId}/member-options](./18022506.html) | 2 | [SVG](./assets/diagrams/18022506-1.svg) · [PlantUML](./assets/diagrams/18022506-1.puml) |
| 18022718 | [POST /api/tasks](./18022718.html) | 1 | [SVG](./assets/diagrams/18022718-1.svg) · [PlantUML](./assets/diagrams/18022718-1.puml) |
| 18022735 | [PUT /api/tasks/{id}/move](./18022735.html) | 2 | [SVG](./assets/diagrams/18022735-1.svg) · [PlantUML](./assets/diagrams/18022735-1.puml) |
| 18055171 | [GET /api/projects/{projectId}/members](./18055171.html) | 2 | [SVG](./assets/diagrams/18055171-1.svg) · [PlantUML](./assets/diagrams/18055171-1.puml) |
| 18055186 | [PUT /api/projects/{projectId}/members](./18055186.html) | 2 | [SVG](./assets/diagrams/18055186-1.svg) · [PlantUML](./assets/diagrams/18055186-1.puml) |
| 18382897 | [GET /api/boards/{id}/archive](./18382897.html) | 2 | [SVG](./assets/diagrams/18382897-1.svg) · [PlantUML](./assets/diagrams/18382897-1.puml) |
| 18382952 | [PUT /api/boards/{id}/columns/reorder](./18382952.html) | 1 | [SVG](./assets/diagrams/18382952-1.svg) · [PlantUML](./assets/diagrams/18382952-1.puml) |
| 18382995 | [GET /api/boards/admin-only](./18382995.html) | 2 | [SVG](./assets/diagrams/18382995-1.svg) · [PlantUML](./assets/diagrams/18382995-1.puml) |
| 18448397 | [GET /api/boards/{id}/analytics](./18448397.html) | 1 | [SVG](./assets/diagrams/18448397-1.svg) · [PlantUML](./assets/diagrams/18448397-1.puml) |
| 18448420 | [POST /api/boards/{boardId}/columns](./18448420.html) | 2 | [SVG](./assets/diagrams/18448420-1.svg) · [PlantUML](./assets/diagrams/18448420-1.puml) |
| 18448489 | [PUT /api/tasks/{id}](./18448489.html) | 1 | [SVG](./assets/diagrams/18448489-1.svg) · [PlantUML](./assets/diagrams/18448489-1.puml) |
| 18481218 | [DELETE /api/boards/columns/{columnId}](./18481218.html) | 1 | [SVG](./assets/diagrams/18481218-1.svg) · [PlantUML](./assets/diagrams/18481218-1.puml) |
| 18481231 | [DELETE /api/boards/{boardId}/members/{userId}](./18481231.html) | 1 | [SVG](./assets/diagrams/18481231-1.svg) · [PlantUML](./assets/diagrams/18481231-1.puml) |
| 18710598 | [PUT /api/boards/columns/{columnId}](./18710598.html) | 2 | [SVG](./assets/diagrams/18710598-1.svg) · [PlantUML](./assets/diagrams/18710598-1.puml) |
| 18710620 | [GET /api/tasks/{id}](./18710620.html) | 2 | [SVG](./assets/diagrams/18710620-1.svg) · [PlantUML](./assets/diagrams/18710620-1.puml) |
| 18874379 | [POST /api/boards](./18874379.html) | 2 | [SVG](./assets/diagrams/18874379-1.svg) · [PlantUML](./assets/diagrams/18874379-1.puml) |
| 18874400 | [POST /api/boards/{boardId}/members](./18874400.html) | 1 | [SVG](./assets/diagrams/18874400-1.svg) · [PlantUML](./assets/diagrams/18874400-1.puml) |

## Отсутствующие диаграммы

Не обнаружены: все 42 найденных макроса содержат исходники и успешно восстановлены. Это результат проверки доступных оригиналов на дату отчёта; содержание схем, которых нет в оригиналах, не предполагалось.

В шаблоне API (393346) тип расширения указан как mermaid-diagram, но параметр language равен plantuml, а source содержит @startuml / @enduml. Его схема восстановлена из этих данных, без подмены содержимого. Поэтому в шаблоне показана исходная схема отправки устава на согласование.

## Проверка сохранности

- 42 HTML-файла изменены только в местах пропущенных изображений; 29 HTML-файлов остались без изменений.
- Обратная замена вставленных figure на исходный пустой параграф даёт побайтовое совпадение с исходными файлами. Таблицы, текст, ссылки, навигация и кодировка UTF-8 сохранены.
- Все 42 SVG успешно прочитаны XML-парсером. Проверены тип диаграммы SEQUENCE, отсутствие сообщений об ошибках и внешних ресурсов. Для исходников и изображений записаны SHA-256.
- В локальном Chrome визуально проверена страница POST /api/tasks: схема отображается на месте пропуска, кириллица читается, таблица и текст ниже сохранены. [Снимок страницы](./.recovery-tools/preview.png).
- Исходные страницы и вложения Confluence не менялись; использованы только операции чтения.

[Манифест с ID макросов, версиями, ссылками на оригиналы и SHA-256](./assets/diagrams/manifest.json). [Результаты проверки HTML](./assets/diagrams/verification.json). Резервные копии исходных HTML: .recovery-tools/original-html/. Ответы MCP и исходный storage-формат: .recovery-tools/data/.

## MCP и официальный REST API

Данные получены через авторизованный Atlassian MCP: searchConfluence с CQL по идентификаторам и expand=content.body.storage,content.version; listConfluenceAttachments; проверочные getConfluenceContent и resolveConfluenceContentMacros. Ограничение первой порции поиска учтено дополнительным запросом по оставшимся ID; все 70 ID сверены. Дополнительная авторизация REST API не понадобилась.

На случай повторного восстановления исследован официальный REST API: [чтение страницы](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/) с body-format=storage либо GET /wiki/rest/api/content/{id}?expand=body.storage,version; [список вложений](https://developer.atlassian.com/cloud/confluence/rest/v1/api-group-content---attachments/) GET /wiki/rest/api/content/{id}/child/attachment. Прямые REST-запросы отдельно не выполнялись, поскольку нужные исходники доступны через MCP.

Локальный рендерер скачан с [официальной страницы PlantUML](https://plantuml.com/download); правила профиля SANDBOX описаны в [документации PlantUML](https://plantuml.com/security).

## Повторная локальная генерация SVG

Из корня экспорта, PowerShell:

```powershell
& 'C:/Program Files/Android/Android Studio/jbr/bin/java.exe' '-DPLANTUML_SECURITY_PROFILE=SANDBOX' -jar .recovery-tools/plantuml.jar -charset UTF-8 -tsvg -failfast2 'assets/diagrams/*.puml'
```
