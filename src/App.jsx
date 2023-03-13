import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import { keepTheme } from "./utils/themes";

import Notes from "./pages/Notes";
import NewNote from "./pages/NewNote";
import ViewNote from "./pages/ViewNote";

const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    keepTheme()
  })
 
  return (
    <main id="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes notes={notes}/>} />
                <Route path="/new" element={<NewNote setNotes={setNotes}/>} />
                <Route path="/view/:id" element={<ViewNote  notes={notes} setNotes={setNotes} />} />
            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App;