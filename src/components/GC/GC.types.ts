import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export type gcButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   disabled?: boolean
   buttonType?: 'filled' | 'unfilled'
}

export type gcDynamicTitle = HTMLAttributes<HTMLSpanElement>
