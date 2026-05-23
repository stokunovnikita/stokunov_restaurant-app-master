// Страница корзины: отображение добавленных товаров, изменение количества, итоговая сумма

import { Link } from "react-router";
import { useCart } from "~/hooks/useCart";
import CartItem from "~/components/CartItem";

// Мета-теги для страницы корзины
export function meta() {
    return [{ title: "Корзина — Кофе и Выпечка" }];
}

export default function CartPage() {
    // Получаем данные и функции из контекста корзины
    const { items, totalAmount, totalCount, updateQuantity, clearCart } = useCart();

    // Если корзина пуста — показываем сообщение и кнопку перехода в меню
    if (items.length === 0) {
        return (
            <div className="text-center py-16">
                <h1 className="text-3xl font-bold text-coffee-dark mb-4">Корзина пуста</h1>
                <p className="text-coffee-dark/70 mb-6">Добавьте что-нибудь вкусненькое из нашего меню</p>
                <Link to="/menu">
                    <button className="bg-coffee-brown text-white px-6 py-2 rounded-xl hover:bg-coffee-dark transition-colors">
                        Перейти в меню
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-coffee-dark mb-6">Корзина</h1>
            
            {/* Список товаров в корзине */}
            <div className="space-y-4 mb-8">
                {items.map(item => (
                    <CartItem key={item.menuItem.id} item={item} onUpdateQuantity={updateQuantity} />
                ))}
            </div>
            
            {/* Блок с итоговой информацией */}
            <div className="bg-coffee-cream rounded-2xl p-6 max-w-md ml-auto">
                <div className="flex justify-between mb-2">
                    <span>Всего товаров:</span>
                    <span className="font-semibold">{totalCount} шт.</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-coffee-dark mb-4">
                    <span>Итого:</span>
                    <span>{totalAmount} ₽</span>
                </div>
                
                {/* Кнопка очистки корзины */}
                <button
                    onClick={clearCart}
                    className="w-full mb-3 bg-coffee-cinnamon text-coffee-dark py-2 rounded-xl hover:bg-coffee-brown hover:text-white transition-colors"
                >
                    Очистить корзину
                </button>
                
                {/* Кнопка перехода к оформлению заказа */}
                <Link to="/checkout">
                    <button className="w-full bg-coffee-brown text-white py-3 rounded-xl text-lg font-semibold hover:bg-coffee-dark transition-colors">
                        Оформить заказ
                    </button>
                </Link>
            </div>
        </div>
    );
}