import classNames from "classnames";
import { TColors } from "../../../types";
import Typography from "../Typography";
import Icon from './../icon/index';
import { forwardRef } from "react";

interface IProps {
    color?: TColors,
    children: string,
    className?: string,
    onClose?: () => void
}

const Badge = forwardRef<any, IProps>((props, ref) => {
    const { onClose, color, children, className } = props;

    const base_classes = 'flex items-center justify-between gap-2 px-4 py-2 rounded-[32px] inline-block';

    const color_classes: any = {
        'primary-l': 'bg-primary-l',
        'primary-m': 'bg-primary-m',
        'primary-d': 'bg-primary-d',
        'secondary-l': 'bg-secondary-l',
        'secondary-m': 'bg-secondary-m',
        'secondary-d': 'bg-secondary-d',
        'gray-900': 'bg-gray-900',
        'gray-800': 'bg-gray-800',
        'gray-700': 'bg-gray-700',
        'gray-600': 'bg-gray-600',
        'gray-500': 'bg-gray-500',
        'gray-400': 'bg-gray-400',
        'gray-300': 'bg-gray-300',
        'gray-200': 'bg-gray-200',
        'gray-100': 'bg-gray-100',
        'white': 'bg-white',
        'black': 'bg-black',
        'error': 'bg-error',
        'success': 'bg-success',
        'warning': 'bg-warning',
        'info': 'bg-info',
    };

    return ( 
        <div className={classNames(
            base_classes,
            className,
            color_classes[color || 'secondary-l'],
            ref
        )}>
            <Typography color="secondary-m" 
            tag='p' 
            variant="label-md" 
            className={
                classNames(
                    className,
                    'leading-normal'
                )
            }
            >
                {children}
            </Typography>
            <span
            className="cursor-pointer [&>svg]:hover:fill-gray-400 transition"
            onClick={onClose}
            >
                <Icon color="secondary-m" name="cross" size={12} />
            </span>
           
        </div>
     );
})

export default Badge;