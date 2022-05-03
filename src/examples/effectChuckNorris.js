import React, {useState, useEffect}  from 'react';
import axios from 'axios';

const App = () => {
  // initialize the useStates
  const [jokes, setJokes] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  
  // We retrieve the api data in the useEffect, 
  // we assign the setJokes which will be the answer, 
  // we set the setLoad to true and we assign the setError in case of request failure
  useEffect(() => {
    axios.get('http://api.icndb.com/jokes/')
      .then(res => {
        setJokes(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true)
      })
  }, []);

  // We set up our condition, with the load, we retrieve the data, 
  // we process the structure and display the result in a small list
  if (load) {
    return (
      <div>
         <h1>Chuck Norris</h1>
         <ul>{error ? <li>{error.message}</li> : jokes.value.map((fact) => <li class="joke" id={fact.id}>{fact.joke}</li>)}</ul>
      </div>
    );
  }
  else {
    return (
      <div>Loading...</div>
    );
    }
};

export default App;

