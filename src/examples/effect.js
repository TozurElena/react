import React, {useState, useEffect}  from 'react';


function App() {
  
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  //  coordinates mouse
  const [pos, setPos] = useState({
    x:0, y:0
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMouveHandler = event => {
    setPos( {
        x: event.clientX,
        y: event.clientY
      })
  }
// component render et add evenement
  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMouveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMouveHandler) 
    }
  }, [])

  return (
    <div>
      <h1>Resurs: {type}</h1>
      <button onClick={() => setType('users')} className='btn btn-success'>Users</button>
      <button onClick={() => setType('todos')} className='btn btn-danger'>Todo</button>
      <button onClick={() => setType('posts')} className='btn btn-default'>Posts</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
      {/* print Data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
      
    </div>
  )
  

}
export default App;

