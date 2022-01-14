import React, { useState } from "react";

const Counter = () => {
  //! создаем состояние
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);
  const [sum, setSum] = useState(0);

  function increment() {
    setPlus(plus + 1);
    setSum(sum + 1);
  }
  function decrement() {
    setMinus(minus - 1);
    setSum(sum + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Вы нажали {plus} </p>
      <p>Вы нажали {minus}</p>
      <p>Количество нажатий {sum}</p>
      <p>Cумма {plus + minus}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Counter;
