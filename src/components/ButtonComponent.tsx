import React, { MouseEventHandler, FC } from "react";

type ButtonComponentProps = {
  label?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * Button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the button.
 * @param {Function} props.handleClick - The click event handler for the button.
 * @param {string} [props.className=""] - The additional CSS class name for the button. Default is "bg-primary-light dark:bg-primary-dark".
 * @param {ReactNode} [props.icon] - The icon element to be displayed before the label.
 * @returns {JSX.Element} The rendered button component.
 * @throws {Error} Will throw an error if the required prop 'handleClick' is missing. Or if the required prop 'label' or 'icon' is missing.
 */
const ButtonComponent: FC<ButtonComponentProps> = ({ label, handleClick, className = "bg-primary-light dark:bg-primary-dark", icon }) => {
    if (!handleClick) {
        throw new Error("ButtonComponent: Missing required prop 'handleClick'");
    }
    if(!label && !icon) {
        throw new Error("ButtonComponent: Missing required prop 'label' or 'icon'");
    }
    return (
        <button className={`btn flex align-center justify-center gap-2 text-black dark:text-white  focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center ${className}`} type="button" onClick={handleClick}>
            {icon && <>{icon} </>}
            {label && <>{label}</>}
        </button>
    );
};

export default ButtonComponent;
