import React, { useState } from "react";
import List from "../list/List";

function Form() {
  return (
    <div>
      <div className="add-form">
        <input />
        <br />
        <input />
        <button className="form-btn">ADD</button>
      </div>

      <List />
    </div>
  );
}

export default Form;
