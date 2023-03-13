import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import NoteItem from '../components/NoteItem';
import Toggle from '../components/Toggle'

import { 
  BsSearch, 
  BsPlus, 
  BsX
} from 'react-icons/bs';

const Notes = ({notes}) => {

  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        console.log(note);
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  // there used to be a script here for generating a random bg color 
  // on each note but it made me mad 
  
  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>Notes</h2>}
            {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autofocus placeholder='Search' />}
            <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>
                {showSearch ? <BsX/> : <BsSearch />}
            </button>
        </header>
        <div className="notes__container">
          {filteredNotes.length === 0 && <p className="no-notes__msg"> No notes found! Try again! </p>}
          {
            filteredNotes.map(note => <NoteItem key={note.id} note={note} />) 
          }
        </div>
        <Link to="/new" className="btn add__btn"><BsPlus /></Link>
        <Toggle />
    </section>
  )
}

export default Notes;