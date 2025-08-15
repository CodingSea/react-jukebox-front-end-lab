import React from 'react'

function NewTrackBtn({ handleShowForm })
{
    return (
        <button style={ { background: "darkorange", margin: "1em" } } onClick={handleShowForm}>Add New Track</button>
    )
}

export default NewTrackBtn