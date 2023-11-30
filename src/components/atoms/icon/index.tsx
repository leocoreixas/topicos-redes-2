import classNames from "classnames";
import { TColors } from "../../../types";
import { TIconName } from "../../../types";


interface IconProps {
    name: TIconName,
    size?: number,
    color?: TColors,
    className?: string
    hoverable?: boolean
}

function Icon(props: IconProps) {
    const { name, size = 24, color = 'black', className } = props;

    const color_classes: any = {
        'primary-l': 'fill-primary-l',
        'primary-m': 'fill-primary-m',
        'primary-d': 'fill-primary-d',
        'secondary-l': 'fill-secondary-l',
        'secondary-m': 'fill-secondary-m',
        'secondary-d': 'fill-secondary-d',
        'gray-900': 'fill-gray-900',
        'gray-800': 'fill-gray-800',
        'gray-700': 'fill-gray-700',
        'gray-600': 'fill-gray-600',
        'gray-500': 'fill-gray-500',
        'gray-400': 'fill-gray-400',
        'gray-300': 'fill-gray-300',
        'gray-200': 'fill-gray-200',
        'gray-100': 'fill-gray-100',
        'white': 'fill-white',
        'black': 'fill-black',
        'error': 'fill-error',
        'success': 'fill-success',
        'warning': 'fill-warning',
        'info': 'fill-info',
    };

    const classes_hoverable = {
        hoverable: 'transition duration-200 hover:fill-secondary-m'
    }

    const svg_object = {
        person: () => (
            <>
                <g clipPath="url(#clip0_125_1047)">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                </g>
                <defs>
                    <clipPath id="clip0_125_1047">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        dashboard: () => (
            <>
                <g clipPath="url(#clip0_125_994)">
                    <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
                </g>
                <defs>
                    <clipPath id="clip0_125_994">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        logout: () => (
            <>
                <g clipPath="url(#clip0_125_998)">
                    <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
                </g>
                <defs>
                    <clipPath id="clip0_125_998">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        hospital: () => (
            <>
                <g clipPath="url(#clip0_125_1061)">
                    <path d="M19 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z" />
                </g>
                <defs>
                    <clipPath id="clip0_125_1061">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        sick: () => (
            <>
                <g clipPath="url(#clip0_127_1079)">
                    <path d="M23 7C23 8.1 22.1 9 21 9C19.9 9 19 8.1 19 7C19 6.22 19.99 4.56 20.58 3.64C20.78 3.33 21.22 3.33 21.42 3.64C22.01 4.56 23 6.22 23 7ZM21.86 10.38C21.94 10.91 22 11.45 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12C2 6.48 6.47 2 11.99 2C14.44 2 16.68 2.88 18.42 4.34C17.91 5.29 17.5 6.27 17.5 7C17.5 8.93 19.07 10.5 21 10.5C21.3 10.5 21.58 10.45 21.86 10.38ZM14.03 10.03L15.09 11.09C15.38 11.38 15.86 11.38 16.15 11.09C16.44 10.8 16.44 10.32 16.15 10.03L15.62 9.5L16.15 8.97C16.44 8.68 16.44 8.2 16.15 7.91C15.86 7.62 15.38 7.62 15.09 7.91L14.03 8.97C13.74 9.26 13.74 9.74 14.03 10.03ZM8.38 9.5L7.85 10.03C7.56 10.32 7.56 10.8 7.85 11.09C8.14 11.38 8.62 11.38 8.91 11.09L9.97 10.03C10.26 9.74 10.26 9.26 9.97 8.97L8.91 7.91C8.62 7.62 8.14 7.62 7.85 7.91C7.56 8.2 7.56 8.68 7.85 8.97L8.38 9.5ZM16.47 15.8C15.47 14.41 13.85 13.5 12 13.5C11.13 13.5 10.31 13.7 9.57 14.06L5.99 12C5.99 11.48 5.73 10.98 5.25 10.71C4.45 10.25 3.41 10.6 3.08 11.51C2.87 12.08 3.05 12.76 3.52 13.15C4.04 13.59 4.72 13.6 5.24 13.31L8.21 15.03C7.96 15.27 7.73 15.53 7.53 15.81C7.17 16.3 7.53 17 8.15 17C8.38 17 8.61 16.9 8.75 16.7C9.47 15.68 10.65 15 12 15C13.35 15 14.53 15.68 15.25 16.7C15.39 16.89 15.61 17 15.85 17C16.47 17 16.83 16.3 16.47 15.8Z" />
                </g>
                <defs>
                    <clipPath id="clip0_127_1079">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        group: () => (
            <>
                <g clipPath="url(#clip0_127_1137)">
                    <path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" />
                </g>
                <defs>
                    <clipPath id="clip0_127_1137">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        smile: () => (
            <>
                <g clipPath="url(#clip0_127_1153)">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8ZM12 18C9.72 18 7.78 16.34 7 14H17C16.22 16.34 14.28 18 12 18ZM15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11Z" />
                </g>
                <defs>
                    <clipPath id="clip0_127_1153">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        search: () => (
            <>
                <g clipPath="url(#clip0_133_1162)">
                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
                </g>
                <defs>
                    <clipPath id="clip0_133_1162">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        chevronLeft: () => (
            <>
                <g clipPath="url(#clip0_133_1232)">
                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
                </g>
                <defs>
                    <clipPath id="clip0_133_1232">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        chevronRight: () => (
            <>
                <g clipPath="url(#clip0_133_1236)">
                    <path d="M10 6L8.59003 7.41L13.17 12L8.59003 16.59L10 18L16 12L10 6Z" />
                </g>
                <defs>
                    <clipPath id="clip0_133_1236">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        chevronDown: () => (
            <>
                <g clipPath="url(#clip0_134_1780)">
                    <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" />
                </g>
                <defs>
                    <clipPath id="clip0_134_1780">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        eye: () => (
            <>
                <g clipPath="url(#clip0_134_1616)">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
                </g>
                <defs>
                    <clipPath id="clip0_134_1616">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        filter: () => (
            <>
                <g clipPath="url(#clip0_137_5304)">
                    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
                </g>
                <defs>
                    <clipPath id="clip0_137_5304">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        calendar: () => (
            <>
                <g clipPath="url(#clip0_137_5722)">
                    <path d="M21 3H18V1H16V3H8V1H6V3H3V21H21V3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" />
                </g>
                <defs>
                    <clipPath id="clip0_137_5722">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        menu: () => (
            <>
                <g clipPath="url(#clip0_137_5990)">
                    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" />
                </g>
                <defs>
                    <clipPath id="clip0_137_5990">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        info: () => (
            <>
                <g clipPath="url(#clip0_137_7137)">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" />
                </g>
                <defs>
                    <clipPath id="clip0_137_7137">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        cross: () => (
            <>
                <g clipPath="url(#clip0_154_7545)">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                </g>
                <defs>
                    <clipPath id="clip0_154_7545">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        arrowBack: () => (
            <>
                <g clipPath="url(#clip0_155_7693)">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
                </g>
                <defs>
                    <clipPath id="clip0_155_7693">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        pencil: () => (
            <>
                <g clipPath="url(#clip0_155_7708)">
                    <path d="M3 17.25V21H6.75L17.81 9.93997L14.06 6.18997L3 17.25ZM21.41 6.33997L17.66 2.58997L15.13 5.12997L18.88 8.87997L21.41 6.33997Z" />
                </g>
                <defs>
                    <clipPath id="clip0_155_7708">
                        <rect width="24" height="24" />
                    </clipPath>
                </defs>
            </>
        ),
        fill_info: () => (
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" />
        ),
        fill_check: () => (
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" />
        ),
        fill_warning: () => (
            <path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
        ),
        fill_error: () => (
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM13 17H11V15H13V17Z" />
        ),
        warning: () => (
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.55817 35.002H35.4415C36.7248 35.002 37.5248 33.6186 36.8915 32.502L21.4415 5.8353C20.7915 4.71864 19.1915 4.71864 18.5582 5.8353L3.10817 32.502C2.47484 33.6186 3.27484 35.002 4.55817 35.002ZM21.6748 30.002H18.3415V26.6686H21.6748V30.002ZM20.0082 23.3353C19.0915 23.3353 18.3415 22.5853 18.3415 21.6686V18.3353C18.3415 17.4186 19.0915 16.6686 20.0082 16.6686C20.9248 16.6686 21.6748 17.4186 21.6748 18.3353V21.6686C21.6748 22.5853 20.9248 23.3353 20.0082 23.3353Z" fill={color ? color : "#D8AF1F"} />
            </svg>
        ),
        more: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_137_5990)">
                    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_137_5990">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        )
    }

    const SvgPath = svg_object[name];

    return (
        <>
            <svg
                width={size}
                height={size}
                className={classNames(
                    color_classes[color],
                    props.hoverable && classes_hoverable.hoverable,
                    className
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <SvgPath />
            </svg>
        </>
    );
}

export default Icon;