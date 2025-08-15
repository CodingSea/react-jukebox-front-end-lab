import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';

function Home()
{
    const [tracks, setTracks] = useState({});


    return (
        <>
            <TrackList tracks={ tracks } setTracks={ setTracks } />
        </>
    )
}

export default Home;