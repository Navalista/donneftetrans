import React, { FC } from 'react'
import css from './Description.module.scss'
import { default as DM } from '@/i18n/messages/defaultMessages'
import translate from '@/i18n/translate'
import Image from 'next/image'
import GC from '@/components/GC/GlobalComponent'
import { PAGES } from '@/constants/pages'

const Description: FC = () => {
   const { 'about-us': aboutUs } = PAGES.find((obj) => 'about-us' in obj)

   return (
      <div className={css.wrapper}>
         <div className={css.content}>
            <span>{translate('main-description.title', DM['main-description.title'].defaultMessage)}</span>
            <h1>{translate('main-description', DM['main-description'].defaultMessage)}</h1>
            <GC.Button buttonType='anchor' href={aboutUs.href}>
               {translate('main-description.button', DM['main-description.button'].defaultMessage)}
            </GC.Button>
         </div>
         <Image src='/assets/images/pages/main/description/background.jpg' width={800} height={800} alt='Tanker' />
      </div>
   )
}

export default Description
