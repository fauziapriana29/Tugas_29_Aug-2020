import React from "react";
import axios from "../../../node_modules/axios/dist/axios.js";

function handleClick(event) {
  event.preventDefault();

  const date = document.getElementById("inputDate").value;
  const time = document.getElementById("inputTime").value;
  const list = document.getElementById("inputList").value;

  const data = {
    date,
    time,
    list,
  };

  axios
    .post("http://localhost:3000/list", data)
    .then((respone) => {
      // window.alert('data berhasil masuk')
      window.location.reload(true);
    })
    .catch((error) => {
      window.alert("error");
    });
}

export default handleClick;
