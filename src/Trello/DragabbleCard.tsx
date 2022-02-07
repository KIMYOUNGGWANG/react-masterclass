import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDragabbleCardProps {
  todo: string;
  idx: number;
}
const DragabbleCard = ({ todo, idx }: IDragabbleCardProps) => {
  return (
    <>
      <Draggable key={todo} draggableId={todo} index={idx}>
        {(arg) => (
          <Card
            ref={arg.innerRef}
            {...arg.draggableProps}
            {...arg.dragHandleProps}
          >
            {todo}
          </Card>
        )}
      </Draggable>
    </>
  );
};

export default React.memo(DragabbleCard);
