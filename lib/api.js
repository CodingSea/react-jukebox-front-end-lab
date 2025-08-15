import axios from "axios";

async function getAllTracks()
{
    const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks`;
    const response = await axios.get(url);
    return response.data;
}

async function createTrack(data)
{
    
}

async function deleteTrack(id)
{
    const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks/${id}`;
    const response = await axios.delete(url);
    return response;
}

export
{
    getAllTracks,
    deleteTrack
}