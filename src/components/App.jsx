import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,newAdd] = useState([]);
  
  function adNote(note) {
    newAdd(prevNotes=>{
     return [...prevNotes,note];
    });
  }

  function deletee(id){

    newAdd(prevNotes =>{
return prevNotes.filter((items,idx)=>{
  return idx!=id;
});
    })

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={adNote} />
      {notes.map((it)=>{
          return  <Note title = {it.con} content = {it.content} onDelete={deletee} key={index} id={index} />
      })
      }
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
