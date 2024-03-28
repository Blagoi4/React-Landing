import { useState, useEffect } from "react";
import MainScreen from "../components/MainScreen";
import TodosCard from "../components/TodosCard";
import Spinner from "../components/Spinner";

const Todos = () => {
  const [dataTodos, setDataTodos] = useState([]);
  const [dataLoadingTodos, setDataLoadingTodos] = useState(false);

  useEffect(() => {
    setDataLoadingTodos(true);
    function fetchDataTodos() {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
        .then((response) => response.json())
        .then((json) => setDataTodos(json));
      setDataLoadingTodos(false);
    }
    fetchDataTodos();
  }, []);
  console.log(dataTodos);

  return (
    <>
      <MainScreen heading="Pages todos" subheading="first pages" />
      {dataLoadingTodos ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="todos-wrapper">
            {dataTodos.map((item) => (
              <TodosCard title={item.title} key={item.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Todos;
