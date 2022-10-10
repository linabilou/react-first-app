import React from 'react'
import ImageSpeaker from './ImageSpeaker';
import Session from './Session';

const SpeakerCardUI = ({
  first,
  last,
  company,
  bio,
  id,
  twitterHandle,
  sessions,
}) => {
  return (
    <div className='ui card'>

      <ImageSpeaker id={id} />

      <div className='content'>
        <span className='header'>
          {first} - {last}
        </span>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i>@{twitterHandle}
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
          Nombre de Sessions : {sessions.length}
        </span>
      </div>

      <div className='content'>
        <Session sessions={sessions}/>
      </div>
    </div>
  );
};


export default SpeakerCardUI