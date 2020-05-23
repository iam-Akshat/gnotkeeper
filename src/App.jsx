import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import NoteTaker from "./NoteTaker.jsx";

function App() {
  const [notes,addNote]=useState([])

  function submitNote(title,content){
    const note={title,content}
    addNote((prevVal)=>{
      return [...prevVal,note]
    })

  }
  return (
    <div>
      <Header />
      <NoteTaker onSubmitNote={submitNote}/> 
      {notes.map((note)=>{
       return <Note key={new Date().toUTCString()} title={note.title} content={note.content}/>
      })}
      
      <Footer />  
    </div>
  );
}

export default App;
