import { FC } from "react";

interface CardsProps {
    title?: string;
    to?: string;
    imgSrc?: string;
    className?: string;
}


const Cards: FC<CardsProps> = ({ title, to, imgSrc, className }) => {
    return (
        <a href={to} className={`block relative rounded overflow-hidden ${className}`}>
            <img src={imgSrc} alt={title} className="w-full h-auto" />
            {title && (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-start bg-gradient-to-b from-transparent to-black">
                    <h3 className="text-white">{title}</h3>
                </div>
            )}
        </a>
    );
};

export default Cards;
