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
      setDataLoadingTodos(false);
    }

    fetchDataTodos();
  }, []);

  const errorMassage = "Error";
  const filteredTodos = dataTodos.filter((el) => {
    if (el.title === value || el.title) {
      return el.title.toLowerCase().includes(value.toLowerCase());
    } else if (el.title != value && value.length > 0) {
      return console.log("errorMassage");
    }
  });


  return (
    <>
      <MainScreen heading="Pages todos" subheading="first pages" />

      <section className="container">
        <div className="todos-wrapper">
          <div className="todos-block">
            {filteredTodos.map((item) => (
                
              <TodosCard title={item.title} key={item.id} />
            ))}
          </div>

          <div className="todos-search">
            <input
              default={value}
              onChange={(event) => setValue(event.target.value)}
              type="text"
            />
           {/* {value.length >= 3 && dataTodos.title !== value ? errorMassage : ''} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Todos;
