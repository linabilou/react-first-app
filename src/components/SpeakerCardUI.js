import React from 'react'

const SpeakerCardUI = ({nom, bio, pseudo_twitter, company, sessions }) => {
  return (
    <div className='ui card'>
      <div className='image'>
        <img alt='' src={`images/speaker-1.jpg`} />
      </div>
      <div className='content'>
        <span className='header'>
          {nom}
        </span>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i>@{pseudo_twitter}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i>
          {company}
        </span>
      </div>
      <div className='extra content'>
        <span>
          <i className='bullhorn icon'></i>
          {sessions}
        </span>
      </div>
    </div>
  )
}

export default SpeakerCardUI