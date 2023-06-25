import React, { useState } from "react";
import classes from "./css/TodoList.module.css";
import { MdDelete } from "react-icons/md";

const TodoList = ({ allTodos, setAllTodos }) => {
  const [checked, setChecked] = useState(false);

  const deleteTodoHandler = (elem) => {
    const leftTodos = allTodos.filter((el) => el !== elem);
    setAllTodos(leftTodos);
  };

  return (
    <div className={`container`}>
      <div className={`row`}>
        <div className={``}></div>
        <div className={`col-12 col-sm-12`}>
          {
            <ul
              className={`fs-4 text-capitalize fw-semibold p-0 ${classes.todoList}`}
            >
              {/*{allTodos.map((elem, index) => (
                <div
                  className={`mt-3 mt-sm-2 d-flex align-items-center justify-content-sm-evenly justify-content-between`}
                  key={index}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <li className={``}>{elem}</li>
                  <div className={`text-uppercase fs-5`}>
                    <MdDelete
                      className={`${classes.deleteBtn}`}
                      onClick={() => deleteTodoHandler(elem)}
                    />
                  </div>
                </div>
              ))}*/}

              {allTodos.map((elem, index) => (
                <li
                  className={`mt-3 mt-sm-2 d-flex align-items-center justify-content-sm-evenly justify-content-between`}
                  key={index}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  {elem}
                  <div className={`text-uppercase fs-5`}>
                    <MdDelete
                      className={`${classes.deleteBtn}`}
                      onClick={() => deleteTodoHandler(elem)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default TodoList;
