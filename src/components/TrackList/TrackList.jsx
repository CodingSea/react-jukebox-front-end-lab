import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { getAllTracks } from '../../../lib/api';

function TrackList({tracks, setTracks})
{
    useEffect(() =>
    {
        getAllTracks(tracks, setTracks);
    }, []);

    return (
        <>
            <div>TrackList</div>
            <ul>
                {
                    tracks.length
                    ?
                    tracks.map((track, index) => 
                    {
                        return (
                            <li key={index}>
                                <p>Title: {track.title}</p>
                            </li>
                        )
                    })
                    :
                    <SyncLoader color='cyan' />
                }
            </ul>
        </>
    )
}

export default TrackList;