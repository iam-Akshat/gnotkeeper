import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import NoteTaker from "./NoteTaker.jsx";
import keyGen from "./keyGen"

function App() {
  const [notes,setNote]=useState([])
  function submitNote(title,content){
    const note={title,content}
    setNote((prevVal)=>{
      return [...prevVal,note]
    })
  }

  function deleteNote(note) {
    const {title,content}=note
    setNote((prevNotes)=>{
     
       return prevNotes.filter((curNote)=>{
         //console.log(note,curNote,curNote==note)
         
         return curNote.title!==title && curNote.content!==content
       })
    })
  }
  return (
    <div>
      <Header />
      <NoteTaker onSubmitNote={submitNote}/> 
      {notes.map((note)=>{
        const uuid=keyGen()
       return <Note delete={deleteNote} key={uuid} title={note.title} content={note.content}/>
      })}
      
      <Footer />  
    </div>
  );
}

export default App;
