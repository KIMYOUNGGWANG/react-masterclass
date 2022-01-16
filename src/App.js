import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;
const Father = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
  /* from{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform:rotate(360deg);
    border-radius: 50%;

  } */
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }

  50%{
    transform:rotate(360deg);
    border-radius: 50%;
  }

  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Sun = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  animation: ${rotateAnimation} 3s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Emoji} {
    &:hover {
      font-size: 96px;
    }
    &:active {
      display: none;
    }
  }
  // span태그대신 styled를 사용하여 변경하는법
  /* span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  } */
`;
const Circle = styled(Sun)`
  border-radius: 50%;
`;
const Text = styled.span`
  color: white;
`;

// a태그를 바꾸기위해선 as프로퍼티 사용하면된다.
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// const Input = styled.input.attrs({
//   required: true,
//   minLength: 10,
// })`
//   background-color: tomato;
// `;

function App() {
  return (
    <div className="App">
      <Father>
        <Title>Hello Tony!</Title>
        <Sun bgColor="tomato">
          <Emoji>🥰</Emoji>
        </Sun>
        {/* <Circle bgColor="red">hello</Circle> */}
        {/* <Btn as="a" href="/"></Btn> */}
        {/* <Input />
        <Input />
        <Input />
        <Input />
        <Input /> */}
        <Emoji>🤭</Emoji>
      </Father>
    </div>
  );
}

export default App;
