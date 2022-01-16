import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// import Circle from "./Circle"

const Container = styled.div`
  background-color: ${props=>props.theme.bgColor};
`
const H1 = styled.h1`
  color : ${props=>props.theme.textColor};
`

function App() {
  const [value, setValue] = useState("");
  const onChange = (e:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget:{value},} = e;
    setValue(value)
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello",value)
    setValue("")
  }
  return (
    <div className="App">
      {/* <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="userName"/>
        <button>Log in</button>
      </form> */}
      <Container>
        <H1>Hello Tony</H1>
      </Container>
    </div>
  );
}

export default App;
