import { Fragment, useState } from "react";
import classes from "./css/Todo.module.css";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState();
  const [allTodos, setAllTodos] = useState([]);

  const submitHandler = () => {
    if (todo) {
      setAllTodos([...allTodos, todo]);
      setTodo("");
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <div className={`container ${classes.container2}`}>
        <div className={`row`}>
          <div className={`col-1 col-sm-2`}></div>
          <div className={`col-10 col-sm-8 d-flex flex-column gap-3`}>
            <h1 className={`text-center`}>Your Todos</h1>
            <div
              className={`text-center py-2 px-4 d-flex justify-content-center gap-2`}
            >
              <input
                type="text"
                value={todo}
                className={`text-center fs-5 fw-medium py-2 px-4  ${classes.inp}`}
                placeholder="Enter Todos ✍"
                onChange={(e) => setTodo(e.target.value)}
              />
              <button
                className={`bg-warning text-body border-0 fw-medium ${classes.submitBtn}`}
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>

            <div className={``}>
              <TodoList allTodos={allTodos} setAllTodos={setAllTodos} />
            </div>
          </div>
          <div className={`col-1 col-sm-2`}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
