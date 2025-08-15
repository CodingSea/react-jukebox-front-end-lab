import React from 'react'

function TrackForm({ listAllTracks })
{
    function handleTrackSubmittion()
    {
        
    }

    return (
        <form>
            <label>Title: </label>
            <input type='text' />

            <label>Artist: </label>
            <input type='text' />

            <button type='submit' style={ { border: "1px solid red" } }>Create Track</button>
        </form>
    )
}

export default TrackForm