import { dynamicTranslate } from '@/i18n/pages/locales/helpers'
import React, { FC } from 'react'
import css from './TabsContent.module.scss'

interface ITabsContent {
   tab: number
}

const TabsContent: FC<ITabsContent> = ({ tab }) => {
   return (
      <div className={css.wrapper}>
         <div className={css.block}>
            {tab !== 2 && (
               <p>
                  {dynamicTranslate('career-vac.title-ship')}
                  <a href='/assets/docs/seaman-profile.docx' download>
                     {dynamicTranslate('career-resume.link')}
                  </a>
               </p>
            )}
         </div>
      </div>
   )
}

export default TabsContent
