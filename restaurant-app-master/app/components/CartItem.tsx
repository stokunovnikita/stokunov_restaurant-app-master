// Компонент для отображения товара в корзине (количество, цена, кнопки +-)

import type { CartItem as CartItemType } from "~/types";

// Интерфейс пропсов компонента
interface CartItemProps {
    item: CartItemType;                                   // Объект товара в корзине
    onUpdateQuantity?: (id: number, quantity: number) => void; // Функция изменения количества
}

export default function CartItem({ item, onUpdateQuantity }: CartItemProps) {
    const { menuItem, quantity } = item; // Деструктуризация: достаём блюдо и количество

    return (
        <div className="bg-coffee-cream rounded-xl p-4 flex items-center gap-4 shadow-sm">
            
            {/* Изображение блюда */}
            <img
                src={menuItem.image}          // Путь к картинке из объекта
                alt={menuItem.name}           // Альтернативный текст
                className="w-20 h-20 object-cover rounded-lg"
            />
            
            {/* Блок с названием и ценой */}
            <div className="flex-grow">
                <h3 className="font-bold text-coffee-dark">{menuItem.name}</h3>
                <p className="text-coffee-brown font-medium">
                    {menuItem.price} ₽ × {quantity} = {menuItem.price * quantity} ₽
                </p>
            </div>
            
            {/* Кнопки изменения количества */}
            <div className="flex items-center gap-2">
                {/* Кнопка "минус" — уменьшить количество */}
                <button
                    onClick={() => onUpdateQuantity?.(menuItem.id, quantity - 1)}
                    className="w-8 h-8 bg-coffee-cream border border-coffee-cinnamon rounded-full hover:bg-coffee-cinnamon transition-colors flex items-center justify-center"
                >
                    −
                </button>
                
                {/* Текущее количество */}
                <span className="w-8 text-center font-medium text-coffee-dark">{quantity}</span>
                
                {/* Кнопка "плюс" — увеличить количество */}
                <button
                    onClick={() => onUpdateQuantity?.(menuItem.id, quantity + 1)}
                    className="w-8 h-8 bg-coffee-cream border border-coffee-cinnamon rounded-full hover:bg-coffee-cinnamon transition-colors flex items-center justify-center"
                >
                    +
                </button>
            </div>
        </div>
    );
}