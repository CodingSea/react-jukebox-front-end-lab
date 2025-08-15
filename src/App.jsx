import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import NewTrackBtn from "./components/NewTrackBtn/NewTrackBtn";
import TrackForm from "./components/TrackForm/TrackForm";
import { getAllTracks } from "../lib/api";



const App = () =>
{
  const [tracks, setTracks] = useState([]);
  const [isFormShown, setIsFormShown] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [trackId, setTrackId] = useState({});

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
      <Home handleShowForm={ handleShowForm } listAllTracks={ listAllTracks } setEditMode={ setEditMode } setTrackId={ setTrackId } playingTrack={ playingTrack } setPlayingTrack={ setPlayingTrack } tracks={tracks} />
    </>
  )
};

export default App;