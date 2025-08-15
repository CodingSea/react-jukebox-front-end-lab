import axios from "axios";

async function getAllTracks(tracks, setTracks)
{
    const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks`;
    const response = await axios.get(url);
    setTracks(response.data);
}

async function deleteTrack(id)
{
    const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks/${id}`;
    const response = await axios.delete(url);
    window.location.reload();
}

export
{
    getAllTracks,
    deleteTrack
}