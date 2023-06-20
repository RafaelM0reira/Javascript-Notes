import React from "react";
import Moment from "moment";
import "../../../styles/notes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes(props) {
  return (
    <>
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title  tNotes ml-3">{props.notes.length} Notes</h1>
        </div>

        <div className="column">
          <button
            className="button is-outlined btnPlus"
            onClick={() => props.createNote()}
          >
            <p className="btnPlus">Notes +</p>
          </button>
        </div>
      </div>
      <hr />
      <div className="columns ">
        <table className="table is-hoverable is-fullwidth ml-5 ">
          {props.notes.map((item, key) => (
            <tbody
              key={key}
              onClick={() => props.selectNote(item._id)}
              active={item == props.current_note}
            >
              <tr>
                <h1 className="title is-3 tNotes ">
                  {item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15)}
                </h1>

                <h2 className="subtitle tNotes ">
                  {item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30)}
                </h2>

                <span className="tag is-dark ">
                  {Moment(item.created_at).format("DD/MM")}
                </span>

                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => props.deleteNote(item)}
                  className="trashBtn ml-5"
                />
              </tr>
              <hr />
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default ListNotes;
