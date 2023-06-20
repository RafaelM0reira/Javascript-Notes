import React, { useState, useEffect } from "react";
import "../../styles/notes.scss";
import { push as Menu } from "react-burger-menu";
import List from "../notes/list";
import NoteService from "../../services/notes";
import Editor from "./editor/index.js";
import Search from "./search/index.js";

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });
  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    }
  }

  const createNote = async () => {
    await NoteService.create();
    fetchNotes();
  };

  const deleteNote = async (note) => {
    await NoteService.delete(note._id);
    fetchNotes();
  };

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  };

  const searchNote = async (query) => {
    const response = await NoteService.search(query);
    setNotes(response.data);
  };

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    });
    setCurrentNote(note);
  };
  return (
    <>
      <Menu
        pageWrapId={"notes-editor"}
        isOpen={props.isOpen}
        onStateChange={(state) => props.setIsOpen(state.isOpen)}
        disableAutoFocus
        outerContainerId={"notes"}
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <div className="columns">
          <div className="column">
            <Search searchNote={searchNote} fetchNotes={fetchNotes} />
          </div>
          <div className="column">
            <List
              notes={notes}
              selectNote={selectNote}
              current_note={current_note}
              createNote={createNote}
              deleteNote={deleteNote}
            />
          </div>
        </div>
      </Menu>
      <Editor note={current_note} updateNote={updateNote} />
    </>
  );
};
export default Notes;
