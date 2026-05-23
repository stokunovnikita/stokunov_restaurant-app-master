import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { CartItem, MenuItem } from "~/types";

// Тип значения контекста корзины
interface CartContextValue {
    items: CartItem[];                      // Массив товаров в корзине
    totalAmount: number;                   // Общая сумма заказа
    totalCount: number;                    // Общее количество товаров
    addItem: (item: MenuItem) => void;     // Добавить товар
    updateQuantity: (id: number, newQty: number) => void; // Изменить количество
    removeItem: (id: number) => void;      // Удалить товар
    clearCart: () => void;                 // Очистить корзину
}

// Создаём контекст (изначально null — будет заполнен провайдером)
const CartContext = createContext<CartContextValue | null>(null);

// Провайдер — оборачивает приложение и даёт доступ к корзине
export function CartProvider({ children }: { children: ReactNode }) {
    // Состояние: массив товаров в корзине
    const [items, setItems] = useState<CartItem[]>([]);

    // Общая сумма заказа (пересчитывается только при изменении items)
    const totalAmount = useMemo(
        () => items.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0),
        [items]
    );

    // Общее количество товаров (сумма всех quantity)
    const totalCount = useMemo(
        () => items.reduce((sum, item) => sum + item.quantity, 0),
        [items]
    );

    // Добавление товара в корзину
    // Если товар уже есть — увеличиваем количество на 1
    // Если нет — добавляем новый с quantity = 1
    const addItem = (menuItem: MenuItem) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.menuItem.id === menuItem.id);
            if (existing) {
                // Товар уже есть: увеличиваем количество
                return prev.map((item) =>
                    item.menuItem.id === menuItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Новый товар: добавляем в массив
            return [...prev, { menuItem, quantity: 1 }];
        });
    };

    // Изменение количества товара
    // Если новое количество <= 0 — товар удаляется из корзины
    const updateQuantity = (id: number, newQty: number) => {
        setItems((prev) =>
            prev
                .map((item) =>
                    item.menuItem.id === id ? { ...item, quantity: newQty } : item
                )
                .filter((item) => item.quantity > 0) // Убираем товары с quantity <= 0
        );
    };

    // Полное удаление товара из корзины по id
    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.menuItem.id !== id));
    };

    // Очистка всей корзины
    const clearCart = () => {
        setItems([]);
    };

    // Возвращаем провайдер контекста со всеми значениями
    return (
        <CartContext.Provider
            value={{ items, totalAmount, totalCount, addItem, updateQuantity, removeItem, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Кастомный хук для удобного использования корзины в любом компоненте
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}