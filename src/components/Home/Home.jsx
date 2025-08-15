import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';
import NewTrackBtn from '../NewTrackBtn/NewTrackBtn';
import PlayingTrack from '../PlayingTrack/PlayingTrack';
import TrackForm from '../TrackForm/TrackForm';
import { getAllTracks } from '../../../lib/api';

function Home()
{
    const [tracks, setTracks] = useState([]);
    const [isFormShown, setIsFormShown] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [trackId, setTrackId] = useState({});
    
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
            <NewTrackBtn handleShowForm={handleShowForm} setEditMode={setEditMode} />
            {
                isFormShown
                ?
                <TrackForm listAllTracks={listAllTracks} setIsFormShown={setIsFormShown} editMode={editMode} trackId={trackId} />
                :
                null
            }
            <TrackList tracks={tracks} listAllTracks={listAllTracks} handleShowForm={handleShowForm} setEditMode={setEditMode} setTrackId={setTrackId} />
            <PlayingTrack />
        </>
    )
}

export default Home;