import React, { useState } from "react";

function NoteTaker (props) {
    const [noteInfo,setNoteInfo]=useState({
        title:"",
        content:""})
    
    function addNote(){
        props.onSubmitNote(noteInfo.title,noteInfo.content)
        
        setNoteInfo({
            title:"",
            content:""})
    }    
    function handleChange(event){
        const {value:val,name}=event.target;
        // const val=event.target.value;
        // const name=event.target.name;
        setNoteInfo((prevVal)=>{
          return name==="title" ? {title:val,content:prevVal.content}:{title:prevVal.title,content:val}
        })
    }
    return (
        <div className="add-Note">
            <input onChange={handleChange} type="text" name="title" id="title" value={noteInfo.title} placeholder="Title"/>
            <textarea rows="3" onChange={handleChange} type="text" name="content" id="content" value={noteInfo.content} placeholder="Take a note..."/>
            <button onClick={addNote}>Add</button>
        </div>
    )
}

export default NoteTaker;