import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      {/* 버튼을 누르면 1씩 플러스된다. */}
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 1); // 첫번째 줄
          setNumber(number + 1); // 두번쨰 줄
          setNumber(number + 1); // 세번째 줄
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default App;

// import { useState } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   return (
//     <div>
// 			{/* 버튼을 누르면 3씩 플러스 된다. */}
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           setNumber((previousState) => previousState + 1);
//           setNumber((previousState) => previousState + 1);
//           setNumber((previousState) => previousState + 1);
//         }}
//       >
//         버튼
//       </button>
//     </div>
//   );
// }

// export default App;
