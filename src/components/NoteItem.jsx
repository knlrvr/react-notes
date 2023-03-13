import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {  

  return (
    <Link to={`/view/${note.id}`} className='note'>
        <h4>{note.title.length > 30 ? (note.title.substr(0, 30)) + '...' : note.title}</h4>
        <h5>{note.details.length > 50 ? (note.details.substr(0, 50)) + '...' : note.details}</h5>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem;