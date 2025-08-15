import axios from "axios";

async function getAllTracks()
{
    try
    {
        const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks/`;
        const response = await axios.get(url);
        return response.data;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function createTrack(data)
{
    try
    {
        const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks/`;
        const response = await axios.post(url, data);
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function deleteTrack(id)
{
    try
    {
        const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks/${ id }`;
        const response = await axios.delete(url);
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

export
{
    getAllTracks,
    deleteTrack,
    createTrack
}