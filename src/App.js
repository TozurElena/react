import React, {useState, useMemo}  from 'react';


function App () {
  // initialize the useStates
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);
  
    
  return (
    <div>
      <h1 style={}>Сomputed property: {}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Clean</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Modifier</button>
    </div>
  );
    
};

export default App;

