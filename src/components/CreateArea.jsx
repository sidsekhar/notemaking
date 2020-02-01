import React, { useState } from "react";

function CreateArea(props) {
  const [con, setCon] = useState({
    title: "",
    content: ""
  });

  function changeHandle(event) {
    const [name, value] = event.target;

    setCon(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(con);
    event.preventDefaults();
  }

  return (
    <div>
      <form>
        <input
          onChange={changeHandle}
          name="title"
          value={con.title}
          placeholder="Title"
        />
        <textarea
          onChange={changeHandle}
          name="content"
          value={con.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
