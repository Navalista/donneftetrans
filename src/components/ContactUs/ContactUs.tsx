import React, { FC } from 'react'
import css from './ContactUs.module.scss'
import GC from '../GC/GlobalComponent'
import GoogleMapReact from 'google-map-react'

interface IMarker {
   lat: number
   lng: number
}

const Marker: FC<IMarker> = () => <div className={css.marker} />

const ContactUs: FC = () => {
   const defaultProps = {
      center: {
         lat: 47.22683336022236,
         lng: 39.747965461825586
      },
      zoom: 11
   }

   return (
      <div className={css.wrapper}>
         <section>
            <h5>Contact us</h5>
            <div className={css.block}>
               <div className={css.contact}>
                  <div className={css.input}>
                     <label>Name</label>
                     <input placeholder='Jane Doe'></input>
                  </div>
                  <div className={css.input}>
                     <label>E-Mail</label>
                     <input placeholder='user@gmail.com'></input>
                  </div>
                  <div className={css.input}>
                     <label>Comment</label>
                     <textarea placeholder='leave your comment...' />
                  </div>
                  <GC.Button buttonStyle='filled' color='secondary'>
                     Submit
                  </GC.Button>
               </div>
               <div className={css.map}>
                  <GoogleMapReact
                     bootstrapURLKeys={{ key: 'AIzaSyC4IBXcJYRoUPljEc8uhG_WK855ZCzn0gA' }}
                     defaultCenter={defaultProps.center}
                     defaultZoom={defaultProps.zoom}
                     yesIWantToUseGoogleMapApiInternals
                  >
                     <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
                  </GoogleMapReact>
               </div>
            </div>
         </section>
      </div>
   )
}

export default ContactUs
