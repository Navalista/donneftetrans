import description from './description.md'
import React, { FC } from 'react'
import MarkdownComponent from '@/HOC/MarkdownComponent'

type T = 'description'

interface IContent {
   type: T
   className: string
}

export const Content: FC<IContent> = ({ type, className }) => {
   switch (type) {
      case 'description':
         return <MarkdownComponent className={className} content={description} />
      default:
         return
   }
}
