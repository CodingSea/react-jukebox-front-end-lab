import React from 'react'

function PlayingTrack({ playingTrack })
{
    return (
        <div className='playingCard'>
            <h2 style={ { color: 'red' } }>Now Playing:</h2>
            <p><span style={ { color: 'orange' } }>Title: </span>{ playingTrack.title }</p>
            <p><span style={ { color: 'orange' } }>Artist: </span>{ playingTrack.artist }</p>
        </div>
    )
}

export default PlayingTrack