// Страница оформления заказа (имитация оплаты)
// Содержит форму с полями: имя, телефон, комментарий, способ оплаты

import { useState, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "~/hooks/useCart";
import Modal from "~/components/ui/Modal";
import Button from "~/components/ui/Button";

// Мета-теги для страницы оформления заказа
export function meta() {
    return [{ title: "Оформление заказа — Кофе и Выпечка" }];
}

export default function CheckoutPage() {
    // Получаем данные корзины и функцию очистки
    const { items, totalAmount, clearCart } = useCart();
    const navigate = useNavigate(); // Для программного перехода на главную

    // Состояния формы
    const [name, setName] = useState("");           // Имя пользователя
    const [phone, setPhone] = useState("");         // Телефон
    const [comment, setComment] = useState("");     // Комментарий к заказу
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card"); // Способ оплаты
    const [isModalOpen, setIsModalOpen] = useState(false);   // Открыто ли модальное окно
    const [isProcessing, setIsProcessing] = useState(false); // Статус обработки платежа

    // Если корзина пуста — показываем сообщение и ссылку на меню
    if (items.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-coffee-dark mb-4">
                    Нечего оформлять
                </h2>
                <Link to="/menu" className="text-coffee-brown hover:underline text-lg">
                    Перейти в меню
                </Link>
            </div>
        );
    }

    // Обработчик отправки формы
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); // Отменяем перезагрузку страницы

        // Простая валидация: имя и телефон обязательны
        if (!name.trim() || !phone.trim()) {
            alert("Заполните имя и телефон");
            return;
        }

        setIsProcessing(true); // Включаем режим "обработки"

        // Имитируем задержку обработки платежа (2 секунды)
        setTimeout(() => {
            setIsProcessing(false);   // Выключаем режим обработки
            setIsModalOpen(true);     // Открываем модальное окно с подтверждением
        }, 2000);
    };

    // Закрытие модального окна после успешного заказа
    const handleCloseModal = () => {
        setIsModalOpen(false); // Закрываем окно
        clearCart();           // Очищаем корзину
        navigate("/");         // Переход на главную страницу
    };

    return (
        <div className="container mx-auto px-6 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-coffee-dark mb-6">Оформление заказа</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Левая колонка: форма заказа */}
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Поле: Имя */}
                        <div>
                            <label className="block text-coffee-dark font-medium mb-2">
                                Ваше имя *
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-coffee-cinnamon rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-brown bg-coffee-light"
                                placeholder="Анна"
                            />
                        </div>

                        {/* Поле: Телефон */}
                        <div>
                            <label className="block text-coffee-dark font-medium mb-2">
                                Телефон *
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full border border-coffee-cinnamon rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-brown bg-coffee-light"
                                placeholder="+7 (999) 123-45-67"
                            />
                        </div>

                        {/* Поле: Комментарий к заказу */}
                        <div>
                            <label className="block text-coffee-dark font-medium mb-2">
                                Комментарий к заказу
                            </label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full border border-coffee-cinnamon rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-brown bg-coffee-light"
                                rows={3}
                                placeholder="Пожелания, аллергии, предпочтения..."
                            />
                        </div>

                        {/* Блок: Способ оплаты */}
                        <div>
                            <label className="block text-coffee-dark font-medium mb-2">
                                Способ оплаты
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="card"
                                        checked={paymentMethod === "card"}
                                        onChange={() => setPaymentMethod("card")}
                                        className="accent-coffee-brown"
                                    />
                                    Картой онлайн
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="cash"
                                        checked={paymentMethod === "cash"}
                                        onChange={() => setPaymentMethod("cash")}
                                        className="accent-coffee-brown"
                                    />
                                    Наличными
                                </label>
                            </div>
                        </div>

                        {/* Кнопка отправки заказа */}
                        <Button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full py-4 text-lg"
                        >
                            {isProcessing ? "Обработка платежа..." : "Оплатить заказ"}
                        </Button>
                    </form>
                </div>

                {/* Правая колонка: информация о заказе */}
                <div className="w-full lg:w-80">
                    <div className="bg-coffee-cream rounded-2xl p-5">
                        <h3 className="font-bold text-coffee-dark text-lg mb-3">Ваш заказ:</h3>
                        
                        {/* Список товаров */}
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {items.map((item) => (
                                <div key={item.menuItem.id}>
                                    <div className="flex justify-between text-coffee-dark/80 py-1 text-sm">
                                        <span>
                                            {item.menuItem.name} × {item.quantity}
                                        </span>
                                        <span>{item.menuItem.price * item.quantity} ₽</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Итоговая сумма */}
                        <div className="border-t border-coffee-cinnamon mt-3 pt-3 flex justify-between font-bold text-lg">
                            <span>Итого:</span>
                            <span className="text-coffee-brown">{totalAmount} ₽</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно с подтверждением заказа */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Заказ оформлен!"
            >
                <div className="text-center py-4">
                    <p className="text-lg text-coffee-dark mb-2">
                        Спасибо, {name}!
                    </p>
                    <p className="text-coffee-dark/70 mb-6">
                        Ваш заказ на сумму {totalAmount} ₽ принят.
                        Мы свяжемся с вами по телефону {phone}.
                    </p>
                    <Button onClick={handleCloseModal} className="w-full">
                        На главную
                    </Button>
                </div>
            </Modal>
        </div>
    );
}