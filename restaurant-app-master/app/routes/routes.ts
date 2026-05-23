// Конфигурация маршрутов приложения
// Здесь связываем URL-адреса с компонентами страниц

import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Экспортируем массив маршрутов
export default [
    index("routes/home.tsx"),           // Главная страница: URL "/"
    route("menu", "routes/menu.tsx"),   // Страница меню: URL "/menu"
    route("cart", "routes/cart.tsx"),   // Страница корзины: URL "/cart"
    route("checkout", "routes/checkout.tsx"), // Страница оформления заказа: URL "/checkout"
    route("about", "routes/about.tsx"), // Страница "О нас": URL "/about"
] satisfies RouteConfig; // Проверяем, что массив соответствует типу RouteConfig