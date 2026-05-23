// Интерфейсы для типизации данных

// Тип категории — ограниченный набор строк для меню
export type Category = "Все" | "Кофе" | "Чай и другое" | "Выпечка" | "Десерты";

// Интерфейс элемента меню
export interface MenuItem {
    id: number;
    name: string;         // название блюда/напитка
    price: number;        // цена в рублях
    description: string;
    image: string;        // путь к изображению
    category: Category;   // категория
}

// Интерфейс элемента корзины (расширяет MenuItem + добавляем quantity)
export interface CartItem {
    menuItem: MenuItem;
    quantity: number;
}

// Информация о ресторане (кофейне)
export interface RestaurantInfo {
    name: string;
    
    address: string;
    phone: string;
    hours: string;
    foundationYear: number;
}