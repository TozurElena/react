import React from 'react';
// import {useState} from 'react';

import './App.css';
// import Hello from './hello';

// function App() {
  // const [state, setState] = useState(initialState);
  // console.log(state);
  // const [likes, setLikes] = useState(initialState);
  // function increment() {
  //   setLikes(value.likes + 1)
  // }
  // function decrement() {
  //   setLikes(value: likes - 1)
  // }
//     return (
//     <div className="App">
      
//       {/* <h1>{likes}</h1>  */}
//       <Hello/>
//       {/* <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button> */}
//     </div>
//   );
// }
// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({count: this.state.count = 1})}>
          Click me
        </button>
      </div>
    );
  }
}
export default App;