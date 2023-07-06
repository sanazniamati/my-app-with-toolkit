import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { incrementAction, decrementAction } from "../features/counterSlice";
import { useEffect } from "react";

export default function Counter() {
  const [datas, setDatas] = useState([]);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await responce.json();
    setDatas(json);
  };

  return (
    <div>
      Value: {count}
      <br />
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <div>
        {datas.map((data) => (
          <div style={{ marginBottom: 10 }} key={data.id}>
            title :{data.title}
          </div>
        ))}
      </div>
    </div>
  );
}
