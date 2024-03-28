import MainScreen from "../components/MainScreen"



const Todos =() => {
   const [data, setData] = ([])
   fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=30' )
  .then((response) => response.json())
  .then((json) => console.log(json));
    return(
        <>
          <MainScreen heading='Pages todos' subheading='first pages'/>
        <section className="container">
      

            <div>Test</div>

        </section>
        </>
    )
}


export default Todos