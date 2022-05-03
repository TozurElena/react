import React, {useState, useMemo}  from 'react';

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++;
  return num * 2;
}

function App () {
  // initialize the useStates
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);
  
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored]);
    
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]) 

  
  return (
    <div>
      <h1 style={styles}>Сomputed property: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Clean</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Modifier</button>
    </div>
  );
    
};

export default App;

