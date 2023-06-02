import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type gcButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
   AnchorHTMLAttributes<HTMLAnchorElement> & {
      href?: string
      disabled?: boolean
      buttonType?: 'anchor' | 'button'
      buttonStyle?: 'filled' | 'unfilled'
      color?: 'primary' | 'secondary'
      isLoading?: boolean
   }
