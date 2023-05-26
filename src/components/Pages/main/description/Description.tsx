import React, { FC, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/hooks/redux'
import useHover from '@/hooks/useHover'
import css from './Description.module.scss'
import { default as DM } from '@/i18n/messages/defaultMessages'
import translate from '@/i18n/translate'
import Image from 'next/image'
import GC from '@/components/GC/GlobalComponent'

const Description: FC = () => {
   const isLaptop = useAppSelector((state) => state.content.mediaQuery.isLaptop)
   const ref = useRef()
   const isHovering = useHover(ref)

   return (
      <div className={css.wrapper}>
         <div className={css.content}>
            <span>{translate('main-description.title', DM['main-description.title'].defaultMessage)}</span>
            <h1>{translate('main-description', DM['main-description'].defaultMessage)}</h1>
            <GC.Button buttonType='unfilled'>
               {translate('main-description.button', DM['main-description.button'].defaultMessage)}
            </GC.Button>
         </div>
         <Image src='/assets/images/pages/main/description/background.jpg' width={800} height={800} alt='Tanker' />
      </div>
   )
}

export default Description
