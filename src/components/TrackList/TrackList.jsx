import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { getAllTracks, deleteTrack } from '../../../lib/api';

function TrackList({ tracks, setTracks })
{
    useEffect(() =>
    {
        getAllTracks(tracks, setTracks);
    }, []);

    return (
        <>
            <div className='trackContainer'>
                <h2 style={ { color: "red" } } className="header">TrackList</h2>

                <div className='trackList'>
                    {
                        tracks.length
                            ?
                            tracks.map((track, index) => 
                            {
                                return (
                                    <div key={index} className='trackCard'>
                                        <p>Title: { track.title } by <span style={ { color: "red" } }>{ track.artist }</span></p>
                                        <ul>
                                            <li><button>Play</button></li>
                                            <li><button>Edit</button></li>
                                            <li><button onClick={() => deleteTrack(track._id)}>Delete</button></li>
                                        </ul>
                                    </div>
                                )
                            })
                            :
                            <SyncLoader color='cyan' />
                    }
                </div>
            </div>
        </>
    )
}

export default TrackList;