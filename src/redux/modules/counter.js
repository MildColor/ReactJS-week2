// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // PLUS_ONE이라는 case를 추가한다.
    // 여기서 말하는 case란, action.type을 의미한다.
    // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
    // 아래 return 절이 실행된다.
    case "PLUS_ONE":
      return {
        // 기존 state에 있던 number에 +1을 더한다.
        number: state.number + 1,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
