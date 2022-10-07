import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  // 👇 코드 추가
  const number = useSelector((state) => state.counter.number);

  console.log(number); // 콘솔 추가
  return (
    <div>
      {/* 👇 코드 추가 */}
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
    </div>
  );
};

export default App;
