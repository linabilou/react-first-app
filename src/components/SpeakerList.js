import React from 'react'
import SpeakerCardUI from './SpeakerCardUI'

const SpeakerList = () => {
  return (
    <div className='container' style={{ display: 'flex', justifyContent : 'space-between' }} >
      <SpeakerCardUI nom = 'Pauline BILOA' bio ='Sysadmin' pseudo_twitter = 'lina_biloa' company = 'ibaas' sessions = '1' />
      <SpeakerCardUI nom = 'Liliane Evina' bio ='Data Engineer' pseudo_twitter = 'liaeel' company = 'kola wallet' sessions = '2' />
      <SpeakerCardUI nom = 'Aurelie Nguedjang' bio ='Devops' pseudo_twitter = 'aurelie_blondel' company = 'ibaas' sessions = '3' />
  </div>
  )
}

export default SpeakerList