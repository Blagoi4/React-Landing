import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo } from "./todoReduxSlice";
import "./todoRedux.css";

const TodoRedux = () => {
  const [text, setText] = useState("");

  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="todo-redux-wrapper">
          <div className="todo-redux-input-wrapper">
            <h3>Что ты хочешь сегодня сделать?</h3>
            <div>
              <input className="inpt"
                onChange={(event) => setText(event.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="btn" onClick={() => dispatch(addTodo(text))}>
              Добавить
            </button>
            <button className="btn" onClick={() => dispatch(removeTodo())}>Удалить</button>
          </div>
          <div className="todo-info-wrapper">
            {todo.map((item, index) => (
              <div className="todo-redux-title" key={index}>
                <p className="todo-redux-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoRedux;
