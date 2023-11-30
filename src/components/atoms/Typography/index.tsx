import classNames from 'classnames';
import { CSSProperties, ElementType, ReactNode } from 'react';
import { TColors } from '../../../types';


export type TFontWeight = 'bold' | 'semi-bold' | 'medium' | 'regular' | 'norm';

interface IProps {
    /**
     * Orientação do texto podendo ser: `center`, `left`, `right`
     * 
     * @default left
     */
    align?: 'center' | 'left' | 'right'
    /**
     * Variante do tipo de texto. Cada tipo corresponde a um estilo diferente de tamanho de fonte, font-family ou peso.
     */
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'label-lg' | 'label-md' | 'label-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'caption'
    /**
     * Propriedade para setar um peso fixo do texto. Podendo ser: `bold`, `semi-bold`, `medium`, `regular`
     */
    fweight?: TFontWeight
    /**
     * Cor do texto. Podendo ser `black`, `white`, `gray-100`, `gray-200`, `gray-300`, `gray-400`, `gray-500`, `gray-600`, `gray-700`, `gray-800`, `gray-900`, `primary-l`, `secondary-l`, `primary-m`, `secondary-m`, `primary-d`, `secondary-d`
     */
    color?: TColors
    /**
     * Texto que será envolvido pelo Componente.
     */
    children: ReactNode
    /**
     * className personalizada do componente
     */
    className?: string
    /**
     * Tag do texto que será renderizado
     * 
     * @default p
     */
    tag: ElementType
    /**
     * Props para adicionar classe de text-overflow ao texto
     */
    overflow?: boolean
    style?: CSSProperties
}

const Typography = (props: IProps) => {
    const {
        align = 'left',
        variant,
        tag: Tag = 'p',
        className,
        color = 'black',
        children,
        overflow,
        style
    } = props;

    const classes = {
        variants: {
            'h1': 'text-h1 font-bold',
            'h2': 'text-h2 font-bold',
            'h3': 'text-h3 font-bold',
            'h4': 'text-h4 font-bold',
            'h5': 'text-h5 font-bold',
            'h6': 'text-h6 font-bold',
            'subtitle': 'text-subtitle font-bold',
            'label-lg': 'text-label-lg font-medium',
            'label-md': 'text-label-md font-medium',
            'label-sm': 'text-label-sm font-medium',
            'body-lg': 'text-body-lg',
            'body-md': 'text-body-md',
            'body-sm': 'text-body-sm',
            'caption': 'text-caption'
        },
        color: {
            'black': 'text-black',
            'white': 'text-white',
            'gray-100': 'text-gray-100',
            'gray-200': 'text-gray-200',
            'gray-300': 'text-gray-300',
            'gray-400': 'text-gray-400',
            'gray-500': 'text-gray-500',
            'gray-600': 'text-gray-600',
            'gray-700': 'text-gray-700',
            'gray-800': 'text-gray-800',
            'gray-900': 'text-gray-900',
            'primary-l': 'text-primary-l',
            'primary-m': 'text-primary-m',
            'primary-d': 'text-primary-d',
            'secondary-l': 'text-secondary-l',
            'secondary-m': 'text-secondary-m',
            'secondary-d': 'text-secondary-d',
            'error-m': 'text-error-m',
            'success': 'text-success',
            'warning': 'text-warning',
            'info': 'text-info'
        },
        overflow: 'text-overflow-ellipsis overflow-hidden whitespace-nowrap'
    }

    return (
        <Tag
            style={style}
            className={classNames(
                `text-${align}`,
                classes.color[color],
                classes.variants[variant],
                overflow && classes.overflow,
                className,
            )}
        >
            {children}
        </Tag>
    )
}

export default Typography