import React, {useState}  from 'react';


import './App.css';
import Hello from './hello';

function computeInitialCounter() {
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] =  useState(0);
  // first state
  const [counter, setCounter] =  useState(() => {
    return computeInitialCounter()
  });

  //second state with object
  // object can separed into 2 state
  const [state, setState] = useState({
    title: 'Count',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)
    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
    // setCounter(prev => prev + 1);
  }
  function decrement() {
    setCounter(counter - 1)
  }
  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }  
    })
  }
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment} className='btn btn-success'>Increment</button>
      <button onClick={decrement} className='btn btn-danger'>Decrement</button>
      <button onClick={updateTitle} className='btn btn-default'>Modifier title</button>
      {/* print second state */}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Hello/>
    </div>
  )
  

}
export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({count: this.setState.count = 1})}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
// export default App;