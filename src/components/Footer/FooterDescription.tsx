import React, { FC } from 'react'
import st from './FooterDescription.module.scss'
import translate from '@/i18n/translate'
import { CSSTransition } from 'react-transition-group'
import { IFooterBlock } from '@/types/footer'
import { default as DM } from '@/i18n/messages/defaultMessages'
import { FOOTER } from '@/constants/footer'

interface IDescription {
   descContent: IFooterBlock | Record<string, never>
   isDescription: boolean
   setisDescription: React.Dispatch<React.SetStateAction<boolean>>
}

const FooterDescription: FC<IDescription> = ({ descContent, isDescription, setisDescription }) => {
   const { type, icon } = descContent
   const { phone } = FOOTER.find((obj) => 'phone' in obj)

   return (
      <CSSTransition
         in={isDescription}
         timeout={400}
         mountOnEnter
         unmountOnExit
         classNames={{
            enter: st.enter,
            enterDone: st.enterDone
         }}
      >
         <div data-type={type} className={st.card}>
            <span
               style={{
                  backgroundImage: `url(/assets/images/svg/footer-${icon})`
               }}
            />
            {type ? (
               type !== 'phone' ? (
                  <p>{translate(`footer-${type}`, DM[`footer-${type}`].defaultMessage)}</p>
               ) : (
                  <a href={`tel:${phone.number.replace(/(?!^\+)\D/g, '')}`}>{phone.number}</a>
               )
            ) : (
               ''
            )}
            <button onClick={() => setisDescription(false)}>&#x2716;</button>
         </div>
      </CSSTransition>
   )
}

export default FooterDescription
