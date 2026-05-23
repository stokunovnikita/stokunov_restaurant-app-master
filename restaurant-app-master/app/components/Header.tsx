import { Link, NavLink } from "react-router";

export default function Header() {
    const { totalCount } = useCart();

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `transition-colors hover:text-coffee-brown ${isActive ? "text-coffee-brown font-semibold" : "text-coffee-dark"}`;

    return (
        <header className="bg-coffee-cream text-coffee-dark shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-coffee-brown">☕ Кофе и Выпечка</Link>
                <div className="flex gap-6 items-center">
                    <NavLink to="/" className={navLinkClass}>Главная</NavLink>
                    <NavLink to="/menu" className={navLinkClass}>Меню</NavLink>
                    <NavLink to="/about" className={navLinkClass}>О нас</NavLink>
                    <NavLink to="/cart" className={navLinkClass}>
                        🛒 Корзина {totalCount > 0 && `(${totalCount})`}
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}