import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
    routerProps?: any
    currentActiveItem?: string
}

export interface ValidationParams {
    schema: any,
    mode: string,
    fields: any
}

export type TColors = 'primary-l' | 'primary-m' | 'primary-d' | 'secondary-l' | 'secondary-m' | 'secondary-d' | 'gray-900' | 'gray-800' | 'gray-700' | 'gray-600' | 'gray-500' | 'gray-400' | 'gray-300' | 'gray-200' | 'gray-100' | 'white' | 'black' | 'error-m' | 'success' | 'warning' | 'info'

export type TIconName = "person" | "dashboard" | "logout" | "sick" | "hospital" | "group" | "smile" | "search" | "chevronLeft" | "chevronRight" | "chevronDown" | "eye" | "filter" | "calendar" | "menu" | "info" | "cross" | "arrowBack" | "pencil" | "warning" | "more" | "cogs" | "shopping_cart"  | "game" | "book" | "cashout" | "ethereum" | "check" | "plus" | "cycle" | "withdraw"

