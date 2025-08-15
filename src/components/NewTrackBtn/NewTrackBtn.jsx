import React from 'react'

function NewTrackBtn({ handleShowForm, setEditMode })
{
    return (
        <button style={ { background: "darkorange", margin: "1em" } } onClick={() => {setEditMode(false); handleShowForm();}}>Add New Track</button>
    )
}

export default NewTrackBtn