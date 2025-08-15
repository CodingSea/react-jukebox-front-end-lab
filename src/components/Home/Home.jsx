import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';
import NowPlaying from '../PlayingTrack/NowPlaying';
import { getTrack } from '../../../lib/api';

function Home({setEditMode, setTrackId, handleShowForm, listAllTracks, playingTrack, setPlayingTrack, tracks})
{
    const [isTrackPlaying, setIsTrackPlaying] = useState(false);

    async function handlePlayigTrack(id)
    {
        const response = await getTrack(id);
        const pt = 
        {
            title: response.title,
            artist: response.artist
        }
        
        if (pt.title === playingTrack.title && pt.artist === playingTrack.artist)
        {
            setIsTrackPlaying(false);
            setPlayingTrack(
                {
                    title: "",
                    artist: ""
                }
            );
        }
        else
        {
            setIsTrackPlaying(true);
            setPlayingTrack(
                {
                    title: response.title,
                    artist: response.artist
                }
            );
        }
    }

    return (
        <>
            <TrackList tracks={ tracks } listAllTracks={ listAllTracks } handleShowForm={ handleShowForm } setEditMode={ setEditMode } setTrackId={ setTrackId } handlePlayigTrack={ handlePlayigTrack } />
            {
                isTrackPlaying
                    ?
                    <NowPlaying playingTrack={ playingTrack } />
                    :
                    null
            }
        </>
    )
}

export default Home;