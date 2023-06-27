import { dynamicTranslate } from '@/i18n/pages/locales/helpers'
import React, { FC, Fragment, useEffect, useReducer, useRef, useState } from 'react'
import css from './TabsResume.module.scss'
import { Jobs } from '@/constants/career'
import { CareerContent as content } from '@/i18n/pages/locales'
import { useAppSelector } from '@/hooks/redux'
import Image from 'next/image'
import GC from '@/components/GC/GlobalComponent'
import { useIntl } from 'react-intl'

const TabsResume: FC = () => {
   const intl = useIntl()
   const staticTranslate = (id: string) => intl.formatMessage({ id: id, defaultMessage: id })
   const lang = useAppSelector((state) => state.content.i18n)
   const [fileName, setFileName] = useState('No files')
   const [icon, setIcon] = useState('icon.file-upload.svg')

   const [error, setError] = useReducer(
      (state, action) => {
         switch (action.type) {
            case 'errPosition':
               return { ...state, position: action.payload }
            case 'errFullname':
               return { ...state, fullName: action.payload }
            case 'errPhone':
               return { ...state, phone: action.payload }
            case 'errEmail':
               return { ...state, email: action.payload }
            case 'errFile':
               return { ...state, file: action.payload }
            default:
               return state
         }
      },
      {
         position: '',
         fullName: '',
         phone: '',
         email: '',
         file: ''
      }
   )

   type EndsTypes = '.pdf' | '.doc' | '.docx' | '.xlsx'

   const fileCheck = (e) => {
      const selectedFile = e.target.files[0]
      const checkEnds = (ex: EndsTypes) => selectedFile.name.toLowerCase().endsWith(ex)
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.xlsx'] as EndsTypes[]
      if (selectedFile && allowedExtensions.some((ex) => checkEnds(ex))) {
         formatIcon(allowedExtensions.findIndex((ex) => checkEnds(ex)))
         setError({ type: 'errFile', payload: '' })
         setFileName(selectedFile.name)
      } else {
         setFileName('No files')
         if (!e.target.files.length) {
            setIcon('icon.file-upload.svg')
            return setError({ type: 'errFile', payload: dynamicTranslate('errors-file.empty') })
         }
         setError({ type: 'errFile', payload: dynamicTranslate('errors-file.ends') })
      }
   }

   const formatIcon = (icon: number) => {
      switch (icon) {
         case 0:
            return setIcon('icon.file-pdf.svg')
         case 2:
            return setIcon('icon.file-doc.svg')
         case 3:
            return setIcon('icon.file-xls.svg')
         default:
            return setIcon('icon.file-upload.svg')
      }
   }

   return (
      <div className={css.wrapper}>
         <div className={css.form}>
            <h5>{dynamicTranslate('career-resume.title')}</h5>
            <div className={css.block_field}>
               {['pos', 'name', 'phone', 'mail'].map((_, i) => {
                  return (
                     <div key={i} className={css.field}>
                        <label>{dynamicTranslate(`career-resume.field-${_}`)}</label>
                        <input placeholder={staticTranslate(`career-resume.field-${_}.ph`)} />
                     </div>
                  )
               })}
            </div>
            <div className={css.block_file}>
               <div className={css.choose}>
                  <input
                     onChange={(e) => fileCheck(e)}
                     type='file'
                     accept='.pdf, .doc, .docx, .xlsx'
                     name='file'
                     id='input__file'
                     className={css.input_file}
                  />
                  <GC.Button htmlFor='input__file' buttonType='label'>
                     {dynamicTranslate('career-resume.file')}
                  </GC.Button>
                  <span style={{ backgroundImage: `url(/assets/images/svg/${icon})` }} />
                  <p className={css.error}>{error.file}</p>
               </div>
               <GC.Button onClick={() => console.log()} color='secondary' buttonStyle='filled'>
                  {dynamicTranslate('career-resume.send')}
               </GC.Button>
            </div>
            <p className={css.fileName}>{fileName}</p>
         </div>
      </div>
   )
}

export default TabsResume
