import React, { Fragment, useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import css from './index.module.scss'
import { IAboutProps } from '@/types/pages/about'
import { AboutContent as content } from '@/i18n/pages/locales'
import { useAppSelector } from '@/hooks/redux'
import Loader from '@/components/UI/loader/Loader'
import { Content as MD } from '@/i18n/pages/locales/en-US/md/about-us'
import { SERVICES } from '@/constants/services'
import { dynamicTranslate } from '@/i18n/pages/locales/helpers'

const About: NextPage = ({ content }: IAboutProps) => {
   const lang = useAppSelector((state) => state.content.i18n)
   const services = content[lang]
   const [isLoading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(false)
   })

   if (isLoading) return <Loader />

   return (
      <div className={css.wrapper}>
         <div className={css.info}>
            <div className={css.heading}>
               <h1>{dynamicTranslate('about-title')}</h1>
               <span />
            </div>
            <MD type='description' className={css.textDesc} />
            {services.map((service, i) => {
               const { title, description } = service
               return (
                  <Fragment key={i}>
                     <div className={css.textServ}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                     </div>
                     <div className={css.video}>
                        <video autoPlay loop>
                           <source src={`/assets/images/pages/about-us/gifs/${SERVICES[i].video}`} type='video/mp4' />
                           Your browser does not support the video tag.
                        </video>
                     </div>
                  </Fragment>
               )
            })}
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

export default About
