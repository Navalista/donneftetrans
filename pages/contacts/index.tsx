import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import css from './index.module.scss'
import { IContactsProps } from '@/types/pages/about'
import { ContactsContent as content } from '@/i18n/pages/locales'
import { useAppSelector } from '@/hooks/redux'
import Loader from '@/components/UI/loader/Loader'
import { dynamicTranslate } from '@/i18n/pages/locales/helpers'
import GC from '@/components/GC/GlobalComponent'
import { CONTACTS } from '@/constants/contacts'

const Contacts: NextPage = ({ content }: IContactsProps) => {
   const lang = useAppSelector((state) => state.content.i18n)
   const loc = content[lang]
   const { tel, tel_sd, tel_hrd, tel_td, mail } = CONTACTS
   const [isLoading, setLoading] = useState(true)

   const pre = (t: string) => t.replace(/(?!^\+)\D/g, '')

   if (!isLoading) return <Loader />

   return (
      <div className={css.wrapper}>
         <div className={css.contacts}>
            <GC.Heading>{dynamicTranslate('contacts-title')}</GC.Heading>
            <div className={css.blocks}>
               <div className={css.block}>
                  <h4>{dynamicTranslate('contacts-page.address')}:</h4>
                  <span className={css.address} />
                  <p>{dynamicTranslate('footer-address')} </p>
                  <h4>{dynamicTranslate('contacts-page.phone')}:</h4>
                  <span className={css.phone} />
                  <a href={`tel:${tel.replace(/(?!^\+)\D/g, '')}`}>{tel}</a>
                  <h4>{dynamicTranslate('contacts-page.mail')}:</h4>
                  <span className={css.mail} />
                  <a href={`mailto:${mail}`}>{mail}</a>
               </div>
               <div className={css.block}>
                  <h4>{dynamicTranslate('contacts-page.phone')}:</h4>
                  <span className={css.phone} />
                  <div>
                     <h5>{dynamicTranslate('contacts-page.p-sd')}</h5>
                     <a href={`tel:${pre(tel_sd)}}`}>{tel}</a>
                  </div>

                  <h4>{dynamicTranslate('contacts-page.phone')}:</h4>
                  <span className={css.phone} />
                  <div>
                     <h5>{dynamicTranslate('contacts-page.p-hrd')}</h5>
                     {tel_hrd.map((t, i) => {
                        return (
                           <a key={i} href={`tel:${pre(t)}}`}>
                              {t}
                              <br />
                           </a>
                        )
                     })}
                  </div>
                  <h4>{dynamicTranslate('contacts-page.phone')}:</h4>
                  <span className={css.phone} />
                  <div>
                     <h5>{dynamicTranslate('contacts-page.p-td')}</h5>
                     <a href={`tel:${pre(tel_td)}`}>{tel}</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {
         content
      }
   }
}

export default Contacts
