import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { 
  BsArrowLeft,
  BsTrash,
  BsCheck2
} from 'react-icons/bs'

import useCreateDate from '../components/useCreateDate'

const ViewNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if(title && details) {
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if(item.id === id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }
    navigate('/')
  }

  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
    navigate('/')
  }

  return (
    <section className="">
        <header className="new-note__header">
          <Link to="/" className="btn"><BsArrowLeft /></Link>
        </header>
        <form className="new-note__form" onSubmit={handleForm}>
          <input type="text" placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus />
          <textarea rows="20" placeholder="Write a note!" 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            autoFocus></textarea>
        </form>
        <button className="btn primary add__btn" onClick={handleForm}><BsCheck2 /></button>
        <button className="btn danger add__btn-2" onClick={handleDelete}><BsTrash /></button>
    </section>
  )
}

export default ViewNote;