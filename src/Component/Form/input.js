import React from "react";
import './input.css'
import handleClick from "./index.js";

function Input() {
  return (
    <div className="container">
      <div className="container inputContainer">
        <form action="" id="addList">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text spantext">Form List</span>
            </div>
            <input
              type="date"
              aria-label="Date"
              className="form inpdate formDate"
              id="inputDate"
              title="Add Date"
            />
            <input
              type="time"
              aria-label="Date"
              className="form inptime "
              id="inputTime"
              title="Add Time"
            />
            <input
              type="text"
              aria-label="List"
              className="inplist form"
              id="inputList"
              placeholder="Create Your List Here"
              title="Create list"
            />
            <div className="contbutton">
              <button
                className="btn btn-warning"
                type="submit"
                id="addBook"
                title="Submit Your List"
                onClick= {handleClick}
              >
                <i className="fas fa-plus fa-2x"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
