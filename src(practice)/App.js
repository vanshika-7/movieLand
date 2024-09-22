import { useEffect, useState } from 'react'; 
import './App.css';

const App = () => {

  useEffect( () =>{
    setcounter(10);

  },[]);

  const [counter, setcounter] = useState(0);

  return(
    <div className='App'>
      <button onClick={() => setcounter((prevcount) => prevcount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setcounter((prevcount) => prevcount+1)}>+</button>
    </div>
  )
}











// const Person = (props) => {
//   return (
//     <>
//       <h1>Name:{props.name}</h1>
//       <h1>Last Name: {props.lastName}</h1>
//       <h1>Age: </h1>
//     </>
//   )
// }

// const App = () => {
//   const name= "smith"; 
//   return (
//     <div className="App">
//       <Person name= 'jane' lastName ='watson' />
//       <Person/>
//     </div>
//   );
// }

export default App;
