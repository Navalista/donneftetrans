import React, { FC } from 'react'
import css from './GC.button.module.scss'
import { gcButtonProps } from './GC.types'

const GCButton: FC<gcButtonProps> = ({ children, buttonType, disabled }) => {
   return (
      <button
         data-type={buttonType}
         onMouseDown={(e) => e.preventDefault()}
         className={css.wrapper}
         data-disabled={disabled}
      >
         {children}
      </button>
   )
}

export default GCButton
