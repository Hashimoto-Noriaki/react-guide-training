import { useState } from "react";

const Example = () => {
  const personObj = { name: "大谷", age: 29 };//初期値
  const [person,setPerson] = useState(personObj);//useState

  const changeName = (e) => {
    setPerson({name:e.target.value,number:person.age});
  }

  const changeAge = (e) => {
    setPerson({name:person.name,age:e.target.value})
  }

  const reset = () => {
    setPerson({name:"",age:""})//空
  }

  return (<>
    <h3>名前:{person.name}</h3>
    <h3>名前:{person.age}</h3>
    <input type ="text" value={person.name} onChange={changeName}/>
    <input type ="age" value={person.age} onChange={changeAge}/>
    <div>
      <button onClick = {reset}>リセット</button>
    </div>
  </>);
};

export default Example;
