import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from "styled-components";
import { isDarkAtom } from "./1.CoinTracker/atoms";
import Router from "./1.CoinTracker/Router";
import { darkTheme } from "./theme";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toDoState } from "./Trello/atom";
import Board from "./Trello/Board";
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
  background-color: ${(props) => props.theme.bgColor};
  color : black;
  /* color : ${(props) => props.theme.textColor}; */
}
a{
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source, draggableId } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board move
      setTodos((prev) => {
        const copy = [...prev[source.droppableId]];
        copy.splice(source.index, 1);
        copy.splice(destination?.index, 0, draggableId);
        return {
          ...prev,
          [source.droppableId]: copy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setTodos((prev) => {
        const sourceBoard = [...prev[source.droppableId]];
        const tragetBoard = [...prev[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        tragetBoard.splice(destination?.index, 0, draggableId);
        return {
          ...prev,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: tragetBoard,
        };
      });
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => {
              return <Board boardId={boardId} toDos={toDos[boardId]} />;
            })}
          </Boards>
        </Wrapper>
      </DragDropContext>
      <GlobalStyle />
    </>
  );
}

export default App;
