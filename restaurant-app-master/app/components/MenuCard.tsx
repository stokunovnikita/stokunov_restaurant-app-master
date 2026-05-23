// Карточка товара (блюда/напитка) для отображения в меню

import type { MenuItem } from "~/types"; // Импорт типа MenuItem из папки types

// Интерфейс пропсов компонента
interface Props {
    item: MenuItem;                 // Объект с данными блюда
    onAddToCart: (item: MenuItem) => void; // Функция добавления в корзину
}

export default function MenuCard({ item, onAddToCart }: Props) {
    return (
        // Карточка: белый фон, скруглённые углы, тень, анимация при наведении
        <div className="bg-coffee-cream rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            
            {/* Изображение блюда */}
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
            />
            
            {/* Блок с текстовой информацией */}
            <div className="p-5">
                
                {/* Верхняя строка: название и цена */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-coffee-dark">{item.name}</h3>
                    <span className="text-coffee-brown font-bold">{item.price} ₽</span>
                </div>
                
                {/* Описание блюда */}
                <p className="text-sm text-coffee-dark/70 mb-4">{item.description}</p>
                
                {/* Кнопка добавления в корзину */}
                <button
                    onClick={() => onAddToCart(item)} // При клике передаём блюдо в родительский компонент
                    className="w-full bg-coffee-brown text-white py-2 rounded-xl hover:bg-coffee-dark transition-colors"
                >
                    В корзину
                </button>
            </div>
        </div>
    );
}