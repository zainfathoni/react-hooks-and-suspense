import React, { useState } from 'react'

function useCounter({ initialState, step }) {
  const [count, setCount] = useState(initialState)
  const increment = () => setCount(count + step)
  return { count, increment }
}

function Counter() {
  const { count, increment } = useCounter({ initialState: 0, step: 1 })
  return <button onClick={increment}>{count}</button>
}

export default Counter
