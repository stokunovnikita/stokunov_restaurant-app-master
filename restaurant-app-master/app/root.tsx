// app/root.tsx
// Корневой компонент приложения (главный layout)
// Здесь задаётся общая структура всех страниц: шапка, подвал, провайдер корзины

import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import Header from "~/components/Header";      // Шапка сайта (навигация)
import Footer from "~/components/Footer";      // Подвал сайта
import { CartProvider } from "~/hooks/useCart"; // Провайдер корзины (глобальное состояние)

import "./app.css"; // Глобальные стили (шрифты, Tailwind, цвета)

// Корневой layout — обёртка для всего приложения
export default function RootLayout() {
    return (
        <html lang="ru"> {/* Язык сайта — русский */}
            <head>
                {/* Кодировка и адаптивность для мобильных устройств */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* React Router: мета-теги для SEO и заголовков */}
                <Meta />
                
                {/* React Router: подключение внешних ресурсов (шрифты и т.д.) */}
                <Links />
            </head>
            <body>
                {/* Провайдер корзины — все дочерние компоненты получают доступ к корзине */}
                <CartProvider>
                    {/* Основной контейнер: минимальная высота экрана, flex-вертикаль */}
                    <div className="min-h-screen flex flex-col">
                        
                        {/* Шапка (навигация) — отображается на всех страницах */}
                        <Header />
                        
                        {/* Основное содержимое страницы: растягивается, max-width, центрирование */}
                        <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
                            <Outlet /> {/* Сюда React Router подставляет текущую страницу (home, menu, cart...) */}
                        </main>
                        
                        {/* Подвал — отображается на всех страницах */}
                        <Footer />
                    </div>
                </CartProvider>
                
                {/* Восстановление позиции прокрутки при переходах между страницами */}
                <ScrollRestoration />
                
                {/* Подключение клиентских скриптов React Router */}
                <Scripts />
            </body>
        </html>
    );
}