// routes/about.tsx
// Страница "О нас" — информация о кофейне, команде, концепции

import { restaurantInfo } from "~/data/restaurant";
import restaurantImage from "~/assets/restaurant.avif"; // Фото интерьера кофейни

// Мета-теги для страницы "О нас"
export function meta() {
    return [
        { title: `О нас — ${restaurantInfo.name}` },
    ];
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Основной блок с описанием кофейни */}
            <section className="bg-coffee-cream rounded-2xl p-8 text-center shadow-md">
                <h1 className="text-3xl lg:text-4xl font-bold text-coffee-dark mb-4">
                    {restaurantInfo.name}
                </h1>
                <p className="text-coffee-dark/80 text-lg leading-relaxed">
                    {restaurantInfo.name}
                </p>
            </section>

            {/* Блок с преимуществами / особенностями */}
            <section className="bg-coffee-light rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-coffee-dark mb-4 text-center">
                    Почему выбирают нас?
                </h2>
                <ul className="space-y-3 text-coffee-dark/80 text-center">
                    <li className="py-2 border-b border-coffee-cinnamon/30">
                        ☕ Свежая выпечка и кофе отборных сортов
                    </li>
                    <li className="py-2 border-b border-coffee-cinnamon/30">
                        🧑‍🍳 Домашние рецепты и любовь к деталям
                    </li>
                    <li className="py-2 border-b border-coffee-cinnamon/30">
                        🏠 Уютная атмосфера и приветливый персонал
                    </li>
                    <li className="py-2">
                        📍 Удобное расположение в центре города
                    </li>
                </ul>
            </section>

            {/* Блок с фото интерьера */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                    src={restaurantImage} 
                    alt={`Интерьер ${restaurantInfo.name}`} 
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
}