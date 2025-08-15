import React, { useState } from 'react'
import { createTrack } from '../../../lib/api';

function TrackForm({ listAllTracks, setIsFormShown })
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

    async function handleTrackSubmittion(event)
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

    return (
        <form onSubmit={ handleTrackSubmittion }>
            <label>Title: </label>
            <input name='title' type='text' onChange={handleChange} value={formData.title} />

            <label>Artist: </label>
            <input name='artist' type='text' onChange={handleChange} value={formData.artist} />

            <button type='submit' style={ { border: "1px solid red" } }>Create Track</button>
        </form>
    )
}

export default TrackForm