
import type { MenuItem } from "~/types";

export const menuData: MenuItem[] = [
    {
        id: 1,
        name: "Круассан с шоколадом",
        description: "Слоёный круассан с нежной шоколадной начинкой",
        price: 180,
        image: "../assets/unnamed.avif",        
        category: "Выпечка",
    },
    {
        id: 2,
        name: "Капучино",
        description: "Классический итальянский кофе с пышной молочной пеной",
        price: 220,
        image: "../assets/capuccino.avif",       
        category: "Кофе",
    },
    {
        id: 3,
        name: "Синнабон",
        description: "Горячая булочка с корицей и сливочной глазурью",
        price: 250,
        image: "../assets/cinnamon.avif",    
        category: "Выпечка",
    },
    {
        id: 4,
        name: "Латте",
        description: "Нежный кофе с большим количеством молока",
        price: 240,
        image: "../assets/latte.avif",            
        category: "Кофе",
    },
    {
        id: 5,
        name: "Чизкейк Нью-Йорк",
        description: "Нежный сливочный чизкейк с ягодным топпингом",
        price: 320,
        image: "../assets/chiesscake.avif",       
        category: "Десерты",
    },
    {
        id: 6,
        name: "Матча латте",
        description: "Японский зелёный чай с молоком и лёгкой сладостью",
        price: 280,
        image: "../assets/matchalatte.avif",           
        category: "Чай и другое",
    },
];