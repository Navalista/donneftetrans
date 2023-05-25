import React, { FC, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import useHover from '../../../hooks/useHover'
import HeadingMain from '../heading-main/HeadingMain'
import MainBlockService from './MainBlockService'
import st from './MainBlock.module.scss'
import { IMainProps } from '@/types/pages/main'

import bg_1 from '../../../../public/assets/images/pages/main/slider/main-bg-1.jpg'
import bg_2 from '../../../../public/assets/images/pages/main/slider/main-bg-2.jpg'
import bg_3 from '../../../../public/assets/images/pages/main/slider/main-bg-3.jpg'
import bg_4 from '../../../../public/assets/images/pages/main/slider/main-bg-4.jpg'
import bg_5 from '../../../../public/assets/images/pages/main/slider/main-bg-5.jpg'

const MainBlock: FC<IMainProps> = ({ content }) => {
   const isLaptop = useAppSelector((state) => state.content.mediaQuery.isLaptop)
   const ref = useRef()
   const isHovering = useHover(ref)
   const [currentImage, setCurrentImage] = useState(1)

   const { title, services } = content

   useEffect(() => {
      const imageInterval = setInterval(() => {
         setCurrentImage((prevImage) => (prevImage + 1) % 5)
      }, 5000)

      return () => {
         clearInterval(imageInterval)
      }
   }, [])

   return (
      <div className={st.wrapper}>
         {!isLaptop && (
            <div className={st.heading}>
               <HeadingMain title={title} />
               <span>&#129045; HOVER</span>
            </div>
         )}
         <div className={st.background}>
            {[bg_1, bg_2, bg_3, bg_4, bg_5].map((image, i) => {
               return (
                  <div
                     key={i}
                     style={{
                        backgroundImage: `url(${image.src})`,
                        opacity: i === currentImage ? 0.9 : 0
                     }}
                  />
               )
            })}
         </div>
         <div ref={ref} className={st.box}>
            <MainBlockService blocks={services} />
         </div>
      </div>
   )
}

export default MainBlock
