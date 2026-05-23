// Главная страница — приветствие и кнопка перехода в меню

import { Link } from "react-router";
import { restaurantInfo } from "~/data/restaurant";

// Мета-теги для SEO и заголовка вкладки браузера
export function meta() {
    return [{ title: `${restaurantInfo.name} — Кофе и выпечка с любовью` }];
}

export default function HomePage() {
    return (
        <div className="text-center py-16 flex flex-col items-center gap-6">
            {/* Заголовок с названием кофейни */}
            <h1 className="text-5xl font-bold text-coffee-dark">{restaurantInfo.name}</h1>
            
            {/* Описание кофейни из файла data/restaurant.ts */}
            <p className="text-lg text-coffee-dark/80 max-w-2xl mx-auto">
                {restaurantInfo.name}
            </p>
            
            {/* Кнопка для перехода на страницу меню */}
            <Link to="/menu">
                <button className="bg-coffee-brown text-white px-8 py-3 rounded-xl text-lg hover:bg-coffee-dark transition-colors">
                    Смотреть меню
                </button>
            </Link>
        </div>
    );
}