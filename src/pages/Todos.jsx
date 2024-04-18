import { useState, useEffect } from "react";
import MainScreen from "../components/MainScreen";
import TodosCard from "../components/TodosCard";
import Spinner from "../components/Spinner";

const Todos = () => {
  const [dataTodos, setDataTodos] = useState([]);
  const [dataLoadingTodos, setDataLoadingTodos] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setDataLoadingTodos(true);

    function fetchDataTodos() {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
        .then((response) => response.json())
        .then((json) => setDataTodos(json));
    }

    fetchDataTodos();
    setDataLoadingTodos(false);
  }, []);

  const errorMassage = "Error";

  const filteredTodos = dataTodos.filter((el) => {
    return el.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <MainScreen heading="Pages todos" subheading="first pages" />

      {dataLoadingTodos ? (
        <div className="container">
          {" "}
          <Spinner />
        </div>
      ) : (
        <section className="container">
          <div className="todos-wrapper">
            <div className="todos-block">
              {filteredTodos.length ? (
                filteredTodos.map((item) => (
                  <TodosCard title={item.title} key={item.id} />
                ))
              ) : (
                <>
                  <h1>Ничего не найдено</h1>
                </>
              )}
            </div>
            <div className="todos-search">
              <input
                default={value}
                onChange={(event) => setValue(event.target.value)}
                type="text"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Todos;
