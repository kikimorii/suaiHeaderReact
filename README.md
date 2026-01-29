# Шапка страниц guap.ru

Для сборки необходимо клонировать репозиторий и установить все зависимости:
```bash
git clone https://github.com/kikimorii/suaiHeaderReact
cd ./suaiHeaderReact
npm i
```
А после этого собрать весь проект
```bash
npm run build
```

### В результате получится следующая директория:

```bash
dist
├── assets
│   ├── desktopMenu
│   ├── mobileMenu
│   ├── utils
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── main.js
├── _nav_2025.json
└── index.html
```
Где `desktopMenu` — скрипты для работы меню на Desktop-версии сайта, `mobileMenu` — скрипты для работы меню на версии для телефонов и `utils` — самописные функции для этого.

Для того, чтоб это всё работало необходимо перенести папку `assets` в нужное место для хранения и подключить к странице два файла `index-[hash].js` и `index-[hash].css` в теге `<head></head>`.
При помощи следующих двух строчек:
```html
<head>
    <!-- ... -->
    <script type="module" crossorigin src="путь/index-[hash]-.js"></script>
    <link rel="stylesheet" crossorigin href="путь/index-[hash].css">
    <!-- ... -->
</head>
```
И после этого создать на странице тег div с классом headerWrapper для инкапсуляции стилей, чтоб они никак не повлияли на остальные, а также `id=header`, чтоб именно в этом блоке происходила инициализация `header'а`.

__Для лучшей работы необходимо обернуть весь контент остальной контент, заисключением `footer` в div с классом `mainContent`, а к тегу `<footer></footer>` добавить класс `footer`, чтобы контент фиксировался на месте при появлении меню шапки.__

Минимальная структура для работы представлена в `dist/index.html` после сборки.