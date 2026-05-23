import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const baseClass = "px-6 py-2 rounded-xl font-medium transition-colors duration-200 disabled:opacity-50";
    
    const variants = {
        primary: "bg-coffee-brown text-white hover:bg-coffee-dark",
        secondary: "bg-coffee-cream text-coffee-dark hover:bg-coffee-cinnamon",
    };

    return (
        <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}