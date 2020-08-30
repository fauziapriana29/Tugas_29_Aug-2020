import React from "react";
import "./table.css";
import "./index.js";
import './indexDelete.js'

function Table() {
  return (
    <div className="container tabelContainer">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="noThList">
              No.
            </th>
            <th scope="col" className="dateThList">
              Date.
            </th>
            <th scope="col" className="timeThList">
              Time.
            </th>
            <th scope="col" className="listThList">
              List.
            </th>
            <th scope="col" className="actionThList">
              Action.
            </th>
          </tr>
        </thead>
        <tbody id="listData">
          {/* <tr className="colList">
            <th scope="row">1</th>
            <td>2020-08-31</td>
            <td>17:00</td>
            <td className="isiList">Test list</td>
            <td>
              <button className="btn btn-danger" title="delete list">
                <i className="far fa-trash-alt fa-lg"></i>
              </button>
              &nbsp;
              <button className="btn btn-secondary" title="edit list">
                <i className="fas fa-pencil-alt fa-lg"></i>
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
