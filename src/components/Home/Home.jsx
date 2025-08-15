import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';
import NewTrackBtn from '../NewTrackBtn/NewTrackBtn';
import PlayingTrack from '../PlayingTrack/PlayingTrack';
import TrackForm from '../TrackForm/TrackForm';
import { getAllTracks } from '../../../lib/api';

function Home()
{
    const [tracks, setTracks] = useState({});
    const [isFormShown, setIsFormShown] = useState(false);
    
    function handleShowForm()
    {
        setIsFormShown(!isFormShown);
    }

    async function listAllTracks()
    {
        const response = await getAllTracks();
        setTracks(response);
    }

    return (
        <>
            <NewTrackBtn handleShowForm={handleShowForm} />
            {
                isFormShown
                ?
                <TrackForm listAllTracks={listAllTracks} setIsFormShown={setIsFormShown} />
                :
                null
            }
            <TrackList tracks={tracks} listAllTracks={listAllTracks} />
            <PlayingTrack />
        </>
    )
}

export default Home;