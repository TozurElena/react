import React, {useState, useEffect, useRef}  from 'react';

function App () {
  // initialize the useStates
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);

  // useRef pour travailler avec DOM
  const inputRef = useRef(null);

  // you can get the value of the previous state
  const prevValue = useRef('');

  
  useEffect(() => {
    renderCount.current++;
    // print value input
    console.log(inputRef.current.value)
  });
// state prevue
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  // peredaem focus na element input
  const focus = () => inputRef.current.focus();
  return (
    <div>
      <h1>Number renders: {renderCount.current}</h1>
      <h2>State prevue: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className='btn btn-success' onClick={focus}>Focus</button>
    </div>
  );
    
};

export default App;

