import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
      @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body{
  font-family: "Source Sans Pro",sans-serif;
  background-color: ${props=>props.theme.bgColor};
  color : ${props=>props.theme.textColor};
}
a{
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}
`
// import Circle from "./Circle"

// const Container = styled.div`
//   background-color: ${props=>props.theme.bgColor};
// `
// const H1 = styled.h1`
//   color : ${props=>props.theme.textColor};
// `

function App() {
//   const [value, setValue] = useState("");
//   const onChange = (e:React.FormEvent<HTMLInputElement>) => {
//     const {currentTarget:{value},} = e;
//     setValue(value)
//   }

//   const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("hello",value)
//     setValue("")
//   }
  return (
    <>
    <GlobalStyle/>
    <Router/>
    </>
    // <div className="App">
    //   {/* <form onSubmit={onSubmit}>
    //     <input value={value} onChange={onChange} type="text" placeholder="userName"/>
    //     <button>Log in</button>
    //   </form> */}
    //   <Container>
    //     <H1>Hello Tony</H1>
    //   </Container>
    // </div>
  );
}

export default App;
