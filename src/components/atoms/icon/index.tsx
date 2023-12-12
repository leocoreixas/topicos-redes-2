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
        'error-m': 'fill-error-m',
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
        check: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0z"/></svg>
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
        ),
        cogs: () => (
            <>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="m23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785l.085-.264l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166 20.166 0 0 0-.141-4.106l-.116-.263l-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786l-.09.267l.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.243 20.243 0 0 0 .137 4.1l.116.265l2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436Zm-11.858-6.524a4.957 4.957 0 1 1 6.488 2.824a5.014 5.014 0 0 1-6.488-2.824Z"/></svg>
            </>
            ),
        shopping_cart: () => (
            <>
                <svg width="24" height="24" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 64C19.6 64 16.04 67.6 16.04 72C16.04 76.4 19.6 80 24 80C28.4 80 32 76.4 32 72C32 67.6 28.4 64 24 64ZM0 0V8H8L22.4 38.36L17 48.16C16.36 49.28 16 50.6 16 52C16 56.4 19.6 60 24 60H72V52H25.68C25.12 52 24.68 51.56 24.68 51L24.8 50.52L28.4 44H58.2C61.2 44 63.84 42.36 65.2 39.88L79.52 13.92C79.84 13.36 80 12.68 80 12C80 9.8 78.2 8 76 8H16.84L13.08 0H0ZM64 64C59.6 64 56.04 67.6 56.04 72C56.04 76.4 59.6 80 64 80C68.4 80 72 76.4 72 72C72 67.6 68.4 64 64 64Z"/>
                </svg>
            </>
            ),
        game: () => (
            <> 
                <svg width="24" height="24" viewBox="0 0 88 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 0H8C3.6 0 0 3.6 0 8V40C0 44.4 3.6 48 8 48H80C84.4 48 88 44.4 88 40V8C88 3.6 84.4 0 80 0ZM40 28H28V40H20V28H8V20H20V8H28V20H40V28ZM58 36C54.68 36 52 33.32 52 30C52 26.68 54.68 24 58 24C61.32 24 64 26.68 64 30C64 33.32 61.32 36 58 36ZM74 24C70.68 24 68 21.32 68 18C68 14.68 70.68 12 74 12C77.32 12 80 14.68 80 18C80 21.32 77.32 24 74 24Z"/>
                </svg>
            </>
        ),
        book: () => (
            <>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.172 4.172 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112Zm.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81Zm.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811H7.586Z"/>
                    <path d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64c-.109.793-.308 1.213-.613 1.513c-.306.299-.734.494-1.544.6c-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111c-.81-.107-1.238-.302-1.544-.601c-.305-.3-.504-.72-.613-1.513c-.041-.3-.068-.637-.084-1.02a2.464 2.464 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083Z"/>
                </svg>
            </>

        ),
        cashout: () => (
            <>  
                <path d="M16 2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3 6h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94l8-2.5v-1c0-1.66-1.34-3-3-3M5 20H3v-7h2v7m8.97.41L7 18.5V13h1.61l5.82 2.17c.34.13.57.46.57.83c0 0-2-.05-2.3-.15l-2.38-.79l-.63 1.9l2.38.79c.51.17 1.04.25 1.58.25H19c.39 0 .74.24.9.57l-5.93 1.84Z"/>
            </>
        ),
        ethereum: () => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
            viewBox="0 0 784.37 1277.39"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            >
            <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"/>
            <g id="_1421394342400">
            <g>
                <polygon fill="#343434" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
                <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
                <polygon fill="#3C3C3B" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
                <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
                <polygon fill="#141414" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
                <polygon fill="#393939" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "/>
            </g>
            </g>
            </g>
            </svg>
        ),
        plus: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        withdraw: () => (
            <>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="m8 0l2 3H9v2H7V3H6l2-3zm7 7v8H1V7h14zm1-1H0v10h16V6z"/><path fill="currentColor" d="M8 8a3 3 0 1 1 0 6h5v-1h1V9h-1V8H8zm-3 3a3 3 0 0 1 3-3H3v1H2v4h1v1h5a3 3 0 0 1-3-3z"/></svg>
            </>
        ),     
        cycle: () => (
            <>
                <path d="M7.85 21.125q-2.6-1.2-4.225-3.625T2 12.025q0-.65.063-1.275t.212-1.225l-1.15.675l-1-1.725L4.9 5.725l2.75 4.75l-1.75 1l-1.35-2.35q-.275.675-.412 1.4T4 12.025q0 2.425 1.325 4.413t3.525 2.937l-1 1.75ZM15.5 9V7h2.725q-1.15-1.425-2.775-2.212T12 4q-1.375 0-2.6.425t-2.25 1.2l-1-1.75Q7.4 3 8.875 2.5T12 2q1.975 0 3.775.738T19 4.874V3.5h2V9h-5.5Zm-.65 15l-4.775-2.75l2.75-4.75l1.725 1l-1.425 2.45q2.95-.425 4.913-2.675T20 12q0-.275-.012-.513T19.925 11h2.025q.025.25.038.488T22 12q0 3.375-2.013 6.038t-5.237 3.587l1.1.65l-1 1.725Z"/>
            </>
        ),       
        car: () => (
            <>
               <svg viewBox="0 0 72 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.68 4.04C62.88 1.68 60.64 0 58 0H14C11.36 0 9.16 1.68 8.32 4.04L0 28V60C0 62.2 1.8 64 4 64H8C10.2 64 12 62.2 12 60V56H60V60C60 62.2 61.8 64 64 64H68C70.2 64 72 62.2 72 60V28L63.68 4.04ZM14 44C10.68 44 8 41.32 8 38C8 34.68 10.68 32 14 32C17.32 32 20 34.68 20 38C20 41.32 17.32 44 14 44ZM58 44C54.68 44 52 41.32 52 38C52 34.68 54.68 32 58 32C61.32 32 64 34.68 64 38C64 41.32 61.32 44 58 44ZM8 24L14 6H58L64 24H8Z"/>
                </svg>

            </>
        ),


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