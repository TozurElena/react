import React, {useState, useEffect, useRef}  from 'react';

function App () {
  // initialize the useStates
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);

  return (
    <div>
      {/* <h1>Number renders: {renderCount.current}</h1>
      <h2>State prevue: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className='btn btn-success' onClick={focus}>Focus</button> */}
    </div>
  );
    
};

export default App;

