import { useState } from "react";

const Example = () => {
  const [toggle,setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);//toggleのボタンを押すとカウントAとBの入れ替え
  }
  return(
    <>
    {/* コンポーネントの位置によってstateが識別される */}
    <button onClick={toggleComponent}>toggle</button>
    {toggle ? <Count title="カウントA"/>:<Count title="カウントB"/>} {/*三項演算子*/} 
       {/* <Count title="カウントA"/>{toggle && <Count title="B"/>} */}
       {/*toggleボタンを押すとカウントBが初期化 */}
    </>
  )
}

const Count = ( {title} ) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>カウント: {title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
