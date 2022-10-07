// src/App.js

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 4. Action Creator를 import 합니다.
import { addNumber, minusNumber } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (evnet) => {
    const { value } = evnet.target;
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  // 콘솔로 onChangeHandler가 잘 연결되었는지 확인해봅니다.
  // input에 값을 넣을 때마다 콘솔에 그 값이 찍히면 연결 성공!
  console.log(number);

  return (
    <div>
      {/* 2. 아래 코드 추가  */}
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      {/* 3. 더하기 버튼 이벤트핸들러를 연결해줍니다. */}
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
