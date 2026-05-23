@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@import "tailwindcss";

html,
body {
    background-color: #F9F6F0;      /* тёплый кофейный фон */
    color: #4A2C1B;                 /* тёмный кофе — цвет текста */
    font-family:
        "Manrope",
        system-ui,
        -apple-system,
        "Segoe UI",
        Roboto,
        "Helvetica Neue",
        Arial,
        "Noto Sans",
        sans-serif;
}

@media (prefers-color-scheme: dark) {
    html,
    body {
        color-scheme: light;        /* принудительно светлая тема для уюта */
    }
}

@theme {
    /* кофейная палитра */
    --color-coffee-light: #F9F6F0;   /* фон страницы */
    --color-coffee-cream: #F3E9D2;   /* карточки */
    --color-coffee-cinnamon: #C4A27A; /* второстепенный акцент */
    --color-coffee-brown: #6F4E37;    /* основной акцент, кнопки */
    --color-coffee-dark: #4A2C1B;     /* тёмный текст, ховеры */
}