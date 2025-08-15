import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';
import NewTrackBtn from '../NewTrackBtn/NewTrackBtn';
import PlayingTrack from '../PlayingTrack/PlayingTrack';

function Home()
{
    const [tracks, setTracks] = useState({});


    return (
        <>
            <NewTrackBtn />
            <TrackList tracks={ tracks } setTracks={ setTracks } />
            <PlayingTrack />
        </>
    )
}

export default Home;