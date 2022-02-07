import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}
const BoardWrapper = styled.div`
  /* padding-top: 30px; */
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.borderColor};
  min-height: 200px;
  p {
    font-size: 20px;
    text-align: center;
    padding: 5px 0;
  }
`;

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(arg) => (
        <BoardWrapper ref={arg.innerRef} {...arg.droppableProps}>
          <p>{boardId}</p>
          {toDos.map((todo, idx) => {
            return <DragabbleCard key={todo} idx={idx} todo={todo} />;
          })}
          {arg.placeholder}
        </BoardWrapper>
      )}
    </Droppable>
  );
};

export default Board;
