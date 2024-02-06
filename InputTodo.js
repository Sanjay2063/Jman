import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const hope = await response.json();
      //console.log(hope);

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Salary Tracker</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
        
        <button className="btn btn-warning">Search</button>
      </form>
      <div className="d-flex mt-4 justify-content-between mx-5">
        <button className="btn btn-warning">Waiter</button>
        <button className="btn btn-warning">Cook</button>
        <button className="btn btn-warning">Accountant</button>
        <button className="btn btn-warning">Manager</button>
      </div>
    </Fragment>
  );
};

export default InputTodo;
