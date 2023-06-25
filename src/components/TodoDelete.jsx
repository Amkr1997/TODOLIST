import React from "react";

const TodoDelete = ({ allTodos, setAllTodos, id }) => {
  const deleteTodoHandler = (e) => {
    const leftTodos = allTodos.filter((el) => el !== e.target.value);
    setAllTodos(leftTodos);
  };

  return (
    <div className={`text-uppercase fs-5`}>
      <button
        type="button"
        className="btn btn-info text-uppercase fw-medium"
        onClick={deleteTodoHandler}
      >
        delete
      </button>
    </div>
  );
};

export default TodoDelete;
