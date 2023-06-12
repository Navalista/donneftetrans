import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import st from './index.module.scss'
import { IAboutProps } from '@/types/pages/about'
import { useAppSelector } from '@/hooks/redux'
import Loader from '@/components/UI/loader/Loader'

const Fleet: NextPage = ({ content }: IAboutProps) => {
   const [isLoading, setLoading] = useState(true)

   if (isLoading) return <Loader />
   return <div className={st.wrapper}></div>
}

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {
         // content
      }
   }
}

export default Fleet
