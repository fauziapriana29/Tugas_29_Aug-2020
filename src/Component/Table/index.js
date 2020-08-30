import React from "react";
import axios from "../../../node_modules/axios/dist/axios.js";

let data = [];

axios
  .get("http://localhost:3000/list")
  .then((respone) => {
    const listData = document.getElementById("listData");
    data = respone.data;

    data.forEach((data, id) => {
      const { date, time, list } = data;

      const tableHtml = `<tr class="colList">
        <th scope="row">${id + 1}</th>
        <td>${date}</td>
        <td>${time}</td>
        <td class="isiList">${list}</td>
        <td>
          <button class="btn btn-danger" title="delete list" onclick="deleteList(${data.id})">
            <i class="far fa-trash-alt fa-lg"></i>
          </button>
          &nbsp;
          <button class="btn btn-secondary" title="edit list">
            <i class="fas fa-pencil-alt fa-lg"></i>
          </button>
        </td>
      </tr>`;

      listData.innerHTML += tableHtml;
    });
  })
  .catch((error) => {
    console.log(error);
  });
