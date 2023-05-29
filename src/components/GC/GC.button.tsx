import Link from 'next/link'
import React, { FC } from 'react'
import css from './GC.button.module.scss'
import { gcButtonProps } from './GC.types'

const GCButton: FC<gcButtonProps> = ({ children, buttonStyle = 'unfilled', buttonType = 'button', disabled, href }) => {
   switch (buttonType) {
      case 'button':
         return (
            <button
               data-type={buttonStyle}
               onMouseDown={(e) => e.preventDefault()}
               className={css.wrapper}
               data-disabled={disabled}
            >
               {children}
            </button>
         )
      case 'anchor':
         return (
            <Link href={href}>
               <a data-type={buttonStyle} className={css.wrapper}>
                  {children}
               </a>
            </Link>
         )
      default:
         return
   }
}

export default GCButton
