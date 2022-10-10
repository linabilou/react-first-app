import React from 'react'

const Session = ({ sessions }) => {
  return (
    <div className='session-detail'>
        {
            sessions.map((session, index) => {
                return(
                    <div className='content' key={index}>
                        <h3 className='header'  key={index}>
                        Detail Session
                        </h3>

                        <div className='description'  key={index}>
                            <h4>Session {index + 1}</h4>
                            <ul  key={index}>
                                <li  key={index}>Id : {session.id}</li>
                                <li  key={index}>Titre : {session.title}</li>
                                <li  key={index}>Année : {session.eventYear}</li>
                                <li  key={index}>Salle : {session.room.name}</li>
                                <li  key={index}>Capacité : {session.room.capacity}</li>
                            </ul>
                        </div>
                        <div className='ui divider'  key={index}></div>
                    </div>
                )
              })
        }
    </div>
  )
}

export default Session