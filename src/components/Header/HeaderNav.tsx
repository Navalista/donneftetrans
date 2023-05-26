import React from 'react'
import css from './HeaderNav.module.scss'
import Link from 'next/link'
import translate from '../../i18n/translate'
import header from '../../i18n/components/header.json'
import { useAppSelector } from '@/hooks/redux'
import { PAGES } from '@/constants/pages'
import { default as DM } from '@/i18n/messages/defaultMessages'

const HeaderNav = () => {
   const currentPage = useAppSelector((state) => state.content.currentPage)

   return (
      <nav className={css.nav}>
         {PAGES.map((page, i) => {
            const [name] = Object.keys(page)
            const [{ href }] = Object.values(page)

            return (
               <Link key={i} href={href}>
                  <a className={css.link}>
                     {translate(`header-link.${name}`, DM[`header-link.${name}`].defaultMessage)}
                  </a>
               </Link>
            )
         })}
      </nav>
   )

   // <a className={css.link + ` ${currentPage === id ? css.active : ''}`}>
}

export default HeaderNav
