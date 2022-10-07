// src/App.js

import React from "react";
import { useDispatch } from "react-redux"; // import 해주세요.

const App = () => {
  const dispatch = useDispatch(); // dispatch 생성
  return (
    <div>
      <button
        // 이벤트 핸들러 추가
        onClick={() => {
          // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
    </div>
  );
};

export default App;
