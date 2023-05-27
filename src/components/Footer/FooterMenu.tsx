import React, { FC, useEffect, useRef, useState } from 'react'
import st from './FooterMenu.module.scss'
import FooterDescription from './FooterDescription'
import { ILayoutComponentProps } from '@/types/layout'
import { CSSTransition } from 'react-transition-group'
import { useIntl } from 'react-intl'
import translate from '@/i18n/translate'
import { FOOTER } from '@/constants/footer'
import { default as DM } from '@/i18n/messages/defaultMessages'

const FooterMenu: FC<ILayoutComponentProps> = ({ scrollStep }) => {
   const [isDescription, setisDescription] = useState(false)
   const [descContent, setdescContent] = useState({})
   const [isScroll, setisScroll] = useState(false)
   const [isBlocks, setisBlocks] = useState(false)
   const [tip, setTip] = useState('')
   const ref = useRef<HTMLDivElement>()
   const intl = useIntl()

   useEffect(() => {
      if (isDescription) setisDescription(false)
   }, [scrollStep])

   useEffect(() => {
      setisScroll(document.body.offsetHeight > window.innerHeight)
      setisBlocks(scrollStep > 0 || !isScroll)
   })

   return (
      <div className={st.wrapper}>
         <div className={st.section}>
            <div className={st.blocks + `${isDescription ? ' ' + st.active : ''}`}>
               {FOOTER.map((item, i) => {
                  const [type] = Object.keys(item)
                  const { icon } = item[type]
                  const tip = intl.formatMessage({ id: `footer-${type}.tip` })

                  return (
                     <CSSTransition
                        key={i}
                        in={isBlocks}
                        timeout={800}
                        mountOnEnter
                        unmountOnExit
                        classNames={{
                           enter: st.enter,
                           enterDone: st.enterDone
                        }}
                     >
                        <div
                           className={st.block}
                           data-type={type}
                           ref={ref}
                           data-tip={tip}
                           onClick={() => {
                              setdescContent({ type, icon, isDescription: isDescription })
                              setisDescription(true)
                           }}
                           onMouseOver={() => setTip(tip)}
                           onMouseOut={() => setTip('')}
                        >
                           <span
                              style={{
                                 backgroundImage: `url(/assets/images/svg/footer-${icon})`
                              }}
                           />
                        </div>
                     </CSSTransition>
                  )
               })}
            </div>
            <div className={st.copyright}>
               {!tip ? (
                  <p>&#169; {translate(`footer-copyright`, DM[`footer-copyright`].defaultMessage)}</p>
               ) : (
                  <p>{tip}</p>
               )}
            </div>
         </div>
         <FooterDescription
            isDescription={isDescription}
            setisDescription={setisDescription}
            descContent={descContent}
         />
      </div>
   )
}

export default FooterMenu
