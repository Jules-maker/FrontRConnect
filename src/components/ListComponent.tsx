import {ReactNode} from 'react';


interface ListViewProps<T> {
    className?: string;
    items: T[];
    renderItem: (item: T) => ReactNode;
}
/**
 * Renders a list of items using the renderItem function.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.className - Additional CSS classes for the list.
 * @param {Array} props.items - The list of items to render.
 * @param {Function} props.renderItem - The function to render each item.
 * @returns {JSX.Element} The rendered list component.
 */
const ListView = <T,>({className, items, renderItem}: ListViewProps<T>) => {
    return (
      <div className={`grid gap-2 ${className}`}>
        {items.map((item, index) => (
        <div key={index}>
        {renderItem(item)}
        </div>
        ))}
      </div>
    );
  }

export default ListView