import React from 'react';


interface ButtonProps {
    label: string;
    secondary: boolean;
    fullwidth: boolean;
    large: boolean;
    onClick: ()=> void;
    disabled: boolean;
    outline: boolean;
}

const Button:React.FC<ButtonProps> = ({
    label,
    secondary,
    fullwidth,
    large,
    onClick,
    disabled,
    outline,
}) => {
    return (
        <button
            disabled = {disabled}
            onClick = {onClick}
            className = {`
                ${disabled? 'opacity-70 cursor-not-allowed':''}
                rounded-full
                font-semibold
                hover:opacity-80
                transition
                border-2
                ${fullwidth ? 'w-full' : ''}
                ${secondary ? 'bg-white text-black borde-black' : 'bg-sky-500 text-white border-sky-500'}
                ${large ? 'text-xl px-5 py-3' : 'text-md px-4 py-2'}
                ${outline ? 'bg-transparent border-white text-white' : ''}
            `}>
                {label}
        </button>
        );
};

export default Button;