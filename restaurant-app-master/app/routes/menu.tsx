// routes/menu.tsx
// Страница меню: фильтр по категориям, добавление в корзину
import { useState } from "react";
import { menuData } from "~/data/menu";
import MenuCard from "~/components/MenuCard";
import { useCart } from "~/hooks/useCart";
import type { MenuItem, Category } from "~/types";

export function meta() {
    return [{ title: "Меню — Кофе и Выпечка" }];
}

export default function MenuPage() {
    const categories: Category[] = ["Все", "Кофе", "Чай и другое", "Выпечка", "Десерты"];
    const [activeCategory, setActiveCategory] = useState<Category>("Все");
    const { addItem, totalCount } = useCart();

    // Фильтрация блюд по выбранной категории
    const filteredMenu = activeCategory === "Все"
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Заголовок и счётчик корзины */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-coffee-dark">Наше меню</h1>
                <span className="text-coffee-brown">В корзине: {totalCount} товаров</span>
            </div>

            {/* Кнопки фильтрации */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full transition-colors ${
                            activeCategory === cat
                                ? "bg-coffee-brown text-white"
                                : "bg-coffee-cream text-coffee-dark hover:bg-coffee-cinnamon"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenu.map(item => (
                    <MenuCard key={item.id} item={item} onAddToCart={addItem} />
                ))}
            </div>
        </div>
    );
}