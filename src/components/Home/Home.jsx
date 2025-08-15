import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';
import NewTrackBtn from '../NewTrackBtn/NewTrackBtn';
import NowPlaying from '../PlayingTrack/NowPlaying';
import TrackForm from '../TrackForm/TrackForm';
import { getAllTracks, getTrack } from '../../../lib/api';

function Home()
{
    const [tracks, setTracks] = useState([]);
    const [isFormShown, setIsFormShown] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [trackId, setTrackId] = useState({});

    const [isTrackPlaying, setIsTrackPlaying] = useState(false);
    const [playingTrack, setPlayingTrack] = useState(
        {
            title: "",
            artist: ""
        }
    )

    function handleShowForm()
    {
        setIsFormShown(!isFormShown);
    }

    async function listAllTracks()
    {
        const response = await getAllTracks();
        setTracks(response);
    }

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
            <NewTrackBtn handleShowForm={ handleShowForm } setEditMode={ setEditMode } />
            {
                isFormShown
                    ?
                    <TrackForm listAllTracks={ listAllTracks } setIsFormShown={ setIsFormShown } editMode={ editMode } trackId={ trackId } />
                    :
                    null
            }
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