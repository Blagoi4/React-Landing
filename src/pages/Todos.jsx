import { useState, useEffect } from "react";
import MainScreen from "../components/MainScreen";
import TodosCard from "../components/TodosCard";

const Todos = () => {
  const [dataTodos, setDataTodos] = useState([]);

  useEffect(() => {
    function fetchDataTodos() {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
        .then((response) => response.json())
        .then((json) => setDataTodos(json));
    }
    fetchDataTodos();
  }, []);
  console.log(dataTodos);

  return (
    <>
      <MainScreen heading="Pages todos" subheading="first pages" />
      <section className="container">
        <div className="todos-wrapper">
          {dataTodos.map((item) => (
            <TodosCard title={item.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Todos;
