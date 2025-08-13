import axios from "axios";

async function getAllTracks(tracks, setTracks)
{
    const url = `${ import.meta.env.VITE_BACK_END_SERVER_URL }/tracks`;
    const response = await axios.get(url);
    console.log(response);
    setTracks(response.data);
}

export
{
    getAllTracks
}