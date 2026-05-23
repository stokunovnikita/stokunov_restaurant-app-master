import { restaurantInfo } from "~/data/restaurant";

export default function Footer() {
    return (
        <footer className="bg-coffee-dark text-coffee-cream py-8 mt-auto">
            <div className="container mx-auto px-6 text-center">
                <p className="font-bold">{restaurantInfo.name}</p>
                <p className="text-sm mt-2">{restaurantInfo.address}</p>
                <p className="text-sm"> {restaurantInfo.phone} | {restaurantInfo.hours}</p>
                <p className="text-sm mt-4"> {restaurantInfo.foundationYear} </p>
            </div>
        </footer>
    );
}