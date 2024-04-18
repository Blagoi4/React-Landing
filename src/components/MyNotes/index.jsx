import { useState } from "react";
import "./MyNotes.css";

const MyNotes = ({ title }) => {
  const [todo, setTodo] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: inputText,
        done: false,
      };

      setTodo([...todo, newItem]);
      setInputText("");
    }
  };

  const toggleHandle = (id) => {
    setTodo([
      ...todo.map((item) =>
        item.id === id ? { ...item, done: !item.done } : { ...item }
      ),
    ]);
  };

  const removeSelectedTodos = () => {
    setTodo([...todo.filter((el) => el.done === false)]);
  };

  const removeTodo = (id) => {
    setTodo([...todo.filter((el) => el.id !== id)]);
  };

  return (
    <>
      <div className="container">
        <div className="todo-redux-wrapper">
          <div className="todo-redux-input-wrapper">
            <h3>{title}</h3>
            <div>
              <input
                className="inpt"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="btn" onClick={addTodo}>
              Добавить
            </button>
            <button className="btn" onClick={() => removeSelectedTodos()}>
              Удалить выбранное
            </button>
          </div>
          <div className="todo-info-wrapper">
            {todo.map((item) => (
              <div key={item.id} className="todo-redux-title">
                <div onClick={() => removeTodo(item.id)}>×</div>
                <div className="todo-redux-text">
                  <p className={item.done ? "text-strike" : "text"}>
                    {item.task}
                  </p>
                </div>
                <div className="checkboxStyle">
                  <input
                    onClick={() => toggleHandle(item.id)}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNotes;
