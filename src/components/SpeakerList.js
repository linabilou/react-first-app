import React from 'react'
import SpeakerCardUI from './SpeakerCardUI'
import { data } from '../data'

const SpeakerList = () => {
  return (
    <div className='container ui four column stackable grid'  style={{ display: 'flex', justifyContent : 'space-around' }} >
      {
        data.map((speaker, index) => {
          return(
            <div className='four wide column' key={index}>
                <SpeakerCardUI {...speaker} key={index} />
            </div>
          )
        })
      }

    </div>
  )
}

export default SpeakerList