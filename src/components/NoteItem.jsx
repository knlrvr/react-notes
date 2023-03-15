import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {  
  var colors = [
    "#c897ce", 
    "#eb8890", 
    "#7facde", 
    "#92d59a", 
    "#e3d586",
    "#d26f6f",
    "#918ed4",
    "#88cf8e",
    "#e5e87d",
    "#dea36f",
  ];

  var bgColor = document.getElementsByClassName('note');
  var uniqueColorIndex = 0;
  for(var i = 0; i < bgColor.length; i++) {
    uniqueColorIndex = Math.floor(Math.random() * (colors.length + 1)) 
    bgColor[i].style['background-color'] = colors[uniqueColorIndex] };

  return (
    <Link to={`/view/${note.id}`} className='note'>
        <h4>{note.title.length > 30 ? (note.title.substr(0, 30)) + '...' : note.title}</h4>
        <h5>{note.details.length > 50 ? (note.details.substr(0, 50)) + '...' : note.details}</h5>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem;
