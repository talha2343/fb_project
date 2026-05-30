import React, { useEffect, useState } from 'react'

const Counter = ({ start }) => {

  const [count, setCount] = useState(0)

  useEffect(() => {

    if (!start) return

    const interval = setInterval(() => {

      setCount((prev) => {

        if (prev >= 250) {
          clearInterval(interval)
          return prev
        }

        return prev + 1
      })

    }, 5)

    return () => clearInterval(interval)

  }, [start])

  return (
    <div className='gap-4 flex items-center justify-between flex-col'>
      <h2 className='font-[impact] text-6xl'>
        {count}M+
      </h2>
    </div>
  )
}

export default Counter