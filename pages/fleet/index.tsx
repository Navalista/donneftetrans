import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import css from './index.module.scss'
import { IAboutProps } from '@/types/pages/about'
import Loader from '@/components/UI/loader/Loader'
import GC from '@/components/GC/GlobalComponent'
import { dynamicTranslate } from '@/i18n/pages/locales/helpers'
import Image from 'next/image'
import Vessels from '@/constants/fleet'
import FTable from '@/components/Pages/fleet/table/FTable'

const Fleet: NextPage = ({ content }: IAboutProps) => {
   const [isLoading, setLoading] = useState(true)
   const { oil, product } = Vessels

   if (!isLoading) return <Loader />
   return (
      <div className={css.wrapper}>
         <GC.Heading>{dynamicTranslate('fleet-title')}</GC.Heading>
         <div className={css.block}>
            <h3>{dynamicTranslate('fleet-tankers.oil')}</h3>
            <div className={css.image}>
               <Image src={'/assets/images/pages/fleet/s-2.png'} layout='fill' alt='License' />
            </div>
            <FTable vessels={oil} />
            <h3>{dynamicTranslate('fleet-tankers.product')}</h3>
            <div className={css.image}>
               <Image src={'/assets/images/pages/fleet/s-1.png'} layout='fill' alt='License' />
            </div>
            <FTable vessels={product} />
         </div>
      </div>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {
         // content
      }
   }
}

export default Fleet
