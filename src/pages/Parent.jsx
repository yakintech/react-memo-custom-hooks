import React, { useState } from 'react'
import Child from './Child'
import UseMemoSample from './UseMemoSample'

function Parent() {
    
  const [counter, setcounter] = useState(0)

  return (<>
    <h1>Counter: {counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increment</button>
    <hr />
    <Child />
    <hr />
    <UseMemoSample />
  </>)
}

export default Parent