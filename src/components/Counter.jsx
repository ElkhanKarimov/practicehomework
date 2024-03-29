import React from 'react'
import useCounter from '../hooks/UseCounter'

const Counter = () => {
    const{counter,Increase,Decrease}=useCounter()

  return (
    <div>
        <button onClick={Decrease}>-</button>
        <p>{counter}</p>
        <button onClick={Increase}>+</button>
    </div>
  )
}

export default Counter