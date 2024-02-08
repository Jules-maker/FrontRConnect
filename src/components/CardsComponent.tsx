import { FC } from "react";

interface CardsProps {
    title?: string;
    to: string;
    imgSrc: string;
    className?: string;
}


/**
 * Renders a card component with an image, title, and link.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.to - The URL to navigate to when the card is clicked.
 * @param {string} props.imgSrc - The source URL of the card image.
 * @param {string} props.className - Additional CSS classes for the card.
 * @returns {JSX.Element} The rendered card component.
 */
const Cards: FC<CardsProps> = ({ title, to, imgSrc, className }) => {
    return (
        <a href={to} className={`block relative rounded overflow-hidden ${className}`}>
            <img src={imgSrc} alt={title ?? 'cards-image'} className="w-full h-auto" />
            {title && (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-start bg-gradient-to-b from-transparent to-black">
                    <h3 className="text-white">{title}</h3>
                </div>
            )}
        </a>
    );
};

export default Cards;
