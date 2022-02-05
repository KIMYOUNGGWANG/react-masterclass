import React from "react";
import { ITodo, toDoState } from "./atom";
import { useSetRecoilState } from "recoil";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prev) => {
      const idx = prev.findIndex((todo) => todo.id === id);
      const newTodo = {
        text,
        id,
        category: name as any,
      };
      return [...prev.slice(0, idx), newTodo, ...prev.slice(idx + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
