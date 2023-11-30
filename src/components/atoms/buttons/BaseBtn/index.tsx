import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import Loader from '../../loaders/Spinner';
import classNames from 'classnames';

interface IProps {
    /**
     * Função executada no evento de clique do botão
     */
    onClick?: MouseEventHandler,
    /**
     * Texto ou Elemento HTML que será renderizado dentro do Componente
     */
    children?: ReactNode | ReactNode[]
    /**
     * className personalizada do Componente
     */
    className?: string
    /**
     * Propríedade que desabilita botão e evento de clique
     */
    disabled?: boolean
    /**
     * Estilo do Componente: `outline`, `text` e `contained`
     * 
     * @default contained
     */
    variant?: "outline" | "contained"
    /**
     * Formatos do Componente: `block`, `square`, `contained`
     * 
     * @default contained
     */
    type?: "button" | "submit" | "reset"
    /**
     * Cores do Componente: `primary`, `secondary`, `error`
     * 
     * @default primary
     */
    color?: "primary" | "secondary" | "error"
    /**
     * Tamanhos do Componente: `lg`, `md`, `sm`
     */
    size?: "lg" | "md" | "sm"
    /**
     * Propriedade que desabilita e renderiza o loader dentro do Componente
     */
    isLoading?: boolean
    /**
     * Tamanho máximo do Componente
     */
    maxWidth?: string
}


const BaseBtn = (props: IProps) => {
    const {
        children,
        onClick,
        className,
        color = 'primary',
        size = 'lg',
        variant = 'contained',
        disabled,
        type = 'button',
        isLoading = false
    } = props;

    const theme = {
        primary: {
            outline: {
                base: `border bg-transparent border-primary-m text-primary-m hover:bg-primary-l`,
                loading: `bg-transparent text-white border border-primary-m`
            },
            contained: {
                base: `bg-primary-m text-white border border-primary-m hover:bg-primary-h`,
                loading: `bg-primary-m text-primary-m border border-primary-m`
            },
        },
        secondary: {
            outline: {
                base: `border border-solid bg-transparent border-secondary-m text-secondary-m hover:bg-secondary-l`,
                loading: `bg-transparent text-white border border-secondary-m `
            },
            contained: {
                base: `bg-secondary-m text-white border border-secondary-m hover:bg-secondary-h`,
                loading: `bg-secondary-m text-secondary-m border border-secondary-m`
            },
            loadingClass: `bg-secondary-m text-white border border-secondary-m hover:bg-secondary-m hover:text-secondary-m`
        },
        error: {
            outline: {
                base: `border border-solid bg-transparent border-error-m text-error-m hover:bg-error-l`,
                loading: `bg-transparent text-white border border-error-m `
            },
            contained: {
                base: `bg-error-m text-white border border-error-m hover:bg-error-h`,
                loading: `bg-error-m text-error-m border border-error-m`
            },
            loadingClass: `bg-error-m text-white border border-error-m hover:bg-error-m hover:text-error-m`
        }
    }

    const classes = {
        base: 'relative focus:outline-none transition ease-in-out duration-300 font-medium',
        disabled: {
            outline: 'border bg-transparent border-gray-300 text-gray-300 cursor-not-allowed',
            contained: 'bg-gray-300 text-gray-100 opacity-50 cursor-not-allowed'
        },
        size: {
            sm: 'px-2 text-label-sm h-6 rounded-[3px]',
            md: 'px-4 text-label-lg h-[30px] rounded-[3px]',
            lg: 'px-8 text-label-lg h-9 rounded'
        }
    }

    const button_props: ButtonHTMLAttributes<HTMLButtonElement> = {
        onClick,
        disabled,
        type,
        className: classNames(
            classes.base,
            classes.size[size],
            disabled
                ? classes.disabled[variant]
                : (
                    !isLoading
                        ? theme[color][variant].base
                        : theme[color][variant].loading
                ),
            className
        )
    }

    return (
        <button {...button_props}>
            {isLoading && (
                <Loader
                    color={variant === 'outline' ? color : 'white'}
                    size={23}
                />
            )}
            {children}
        </button>
    )
}

export default BaseBtn;