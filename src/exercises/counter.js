import React, { useState, useEffect } from 'react'

function useCounter({ initialState, step }) {
  // Declare it as a function so it only run at the first render
  const initialCount = () =>
    Number(window.localStorage.getItem('count') || initialState)
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + step)
  // It will only run the callback when count changes
  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    [count]
  )
  return { count, increment }
}

function Counter() {
  const { count, increment } = useCounter({ initialState: 0, step: 1 })
  return <button onClick={increment}>{count}</button>
}

export default Counter
