import { PageNames } from '@/constants/pages'

export interface IMainBlock {
   title: string
   description: string
   icon?: string
   loc?: string
}

export interface IMainProps {
   [locale: string]: {
      title: string
      services: IMainBlock[]
   }
}
