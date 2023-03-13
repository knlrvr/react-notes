import { Link, useNavigate } from 'react-router-dom'
import { 
  BsArrowLeft, 
  BsCheck2 
} from 'react-icons/bs'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

import useCreateDate from '../components/useCreateDate'

const NewNote = ({setNotes}) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details) {
      const note = {id: uuid(), title, details, date}
      setNotes(prevNotes => [note, ...prevNotes])
      navigate('/')
    }
  }

  return (
    <section className="">
        <header className="new-note__header">
          <Link to="/" className="btn"><BsArrowLeft /></Link>
        </header>
        <form className="new-note__form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            autofocus />
          <textarea rows="20" placeholder="Write a note!" 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          autofocus></textarea>
        </form>
        <button className="btn lg primary add__btn" onClick={handleSubmit}><BsCheck2 /></button>
    </section>
  )
}

export default NewNote