import React, { useEffect, useState } from 'react'
import { createTrack, getTrack, updateTrack } from '../../../lib/api';

function TrackForm({ listAllTracks, setIsFormShown, editMode, trackId })
{
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState(
        {
            title: "",
            artist: ""
        }
    );

    function handleChange(event)
    {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function handleCreateTrack(event)
    {
        event.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        const response = await createTrack(formData)
        setFormData(
            {
                title: "",
                artist: ""
            }
        );

        if (response.status === 201)
        {
            setIsFormShown(false);
        }

        setIsSubmitting(false);

        listAllTracks();
    }

    async function handleEditTrack(event)
    {
        event.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        const response = await updateTrack(trackId ,formData);
        if (response.status === 200)
        {
            setIsFormShown(false);
        }

        setIsSubmitting(false);

        listAllTracks();
    }

    async function getTrackDataFromTrackId()
    {
        const selectedTrack = await getTrack(trackId);
        setFormData(
            {
                title: selectedTrack.title,
                artist: selectedTrack.artist
            }
        )
    }

    useEffect(() =>
    {
        if(editMode)
        {
            getTrackDataFromTrackId();
        }
    }, [])

    return (
        <>
            {
                editMode
                    ?
                    <form onSubmit={ handleEditTrack }>
                        <label>Title: </label>
                        <input name='title' type='text' onChange={ handleChange } value={ formData.title } />

                        <label>Artist: </label>
                        <input name='artist' type='text' onChange={ handleChange } value={ formData.artist } />

                        <button type='submit' style={ { border: "1px solid red" } }>Update Track</button>
                    </form>
                    :
                    <form onSubmit={ handleCreateTrack }>
                        <label>Title: </label>
                        <input name='title' type='text' onChange={ handleChange } value={ formData.title } />

                        <label>Artist: </label>
                        <input name='artist' type='text' onChange={ handleChange } value={ formData.artist } />

                        <button type='submit' style={ { border: "1px solid red" } }>Create Track</button>
                    </form>
            }
        </>
    )
}

export default TrackForm