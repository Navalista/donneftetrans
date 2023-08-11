import { PageNames } from '@/constants/pages'

interface SEO {
   siteTitle: string
   pageTitle: string
   description: string
}

type Pages = PageNames | 'main'

export type ISEO = {
   [key in Pages]: SEO
}

export default {
   'about-us': {
      siteTitle: 'Donneftetrans',
      pageTitle: 'About Us',
      description: 'When you get to know Donneftetrans, you will want to work with us.'
   },
   fleet: {
      siteTitle: 'Donneftetrans',
      pageTitle: 'Fleet',
      description:
         'The shipping company Donneftetrans owns its own tanker fleet and carries out transportation mainly in the Caspian, Azov, Black, Marmara Seas and inland shipping.'
   },
   career: {
      siteTitle: 'Donneftetrans',
      pageTitle: 'Career',
      description: 'Build your career with a team of specialists in a professional company.'
   },
   contacts: {
      siteTitle: 'Donneftetrans',
      pageTitle: 'Contacts',
      description: 'Contact us for further cooperation.'
   },
   main: {
      siteTitle: 'Donneftetrans',
      pageTitle: 'Main Page',
      description:
         'The shipping company Donneftetrans owns its own tanker fleet and carries out transportation mainly in the Caspian, Azov, Black, Marmara Seas and inland shipping. Company specializes in the transportation of crude oil and various bulk cargoes.'
   }
} as ISEO
