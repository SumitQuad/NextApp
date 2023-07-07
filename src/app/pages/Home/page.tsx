'use client'
import React, { useState } from "react";

interface Props {}

function Home(props: Props) {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setCount(count + 1);
      };
    
      const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setCount(count - 1);
      };
      

  return (
    <>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
 
    </>
  );
}

export default Home;
