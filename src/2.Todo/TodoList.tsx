import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector, toDoState } from "./atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  // const todos = useRecoilValue(toDoState);
  // const [todo, doing, done] = useRecoilValue(toDoSelector);
  const value = useRecoilValue(toDoSelector);
  console.log(value);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateTodo />
      <h2>{category}</h2>
      {value?.map((el) => (
        <Todo key={el.id} {...el} />
      ))}
      {/* <h2>To Do</h2>
      <ul>
        {todo.map((el) => {
          return <Todo key={el.id} {...el} />;
        })}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((el) => {
          return <Todo key={el.id} {...el} />;
        })}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((el) => {
          return <Todo key={el.id} {...el} />;
        })}
      </ul>
      <hr /> */}
    </div>
  );
};

// const TodoList = () => {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<iForm>();
//   const onValid = (data: iForm) => {
//     console.log(data);
//     if (data.Password !== data.ConfirmPassword) {
//       setError("ConfirmPassword", { message: "Password are not the same" });
//     }

//     setError("extraError", { message: "Server offline" });
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onValid)}>
//         <InputWrapper>
//           <label>Email</label>
//           <input
//             {...register("Email", {
//               required: true,
//               pattern: {
//                 value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                 message: "Only naver.com",
//               },
//             })}
//             placeholder="Email"
//           />
//           <span>{errors?.Email?.message}</span>
//         </InputWrapper>
//         <InputWrapper>
//           <label>FirstName</label>
//           <input
//             {...register("FirstName", {
//               required: true,
//               pattern: {
//                 value: /^[A-Za-z]/,
//                 message: "only English",
//               },
//             })}
//             placeholder="FirstName"
//           />
//           <span>{errors?.FirstName?.message}</span>
//         </InputWrapper>
//         <InputWrapper>
//           <label>LastName</label>
//           <input
//             {...register("LastName", {
//               required: true,
//               pattern: {
//                 value: /^[A-Za-z]/,
//                 message: "only English",
//               },
//             })}
//             placeholder="LastName"
//           />
//           <span>{errors?.LastName?.message}</span>
//         </InputWrapper>
//         <InputWrapper>
//           <label>Password</label>
//           <input
//             {...register("Password", {
//               required: true,
//               minLength: {
//                 value: 5,
//                 message: "5글자 이상 등록하세요",
//               },
//             })}
//             placeholder="Password"
//           />
//           <span>{errors?.Password?.message}</span>
//         </InputWrapper>
//         <InputWrapper>
//           <label>Confirm Password</label>
//           <input
//             {...register("ConfirmPassword", {
//               required: true,
//               minLength: {
//                 value: 5,
//                 message: "5글자 이상 등록하세요",
//               },
//             })}
//             placeholder="Confirm Password"
//           />
//           <span>{errors?.ConfirmPassword?.message}</span>
//         </InputWrapper>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// };
export default TodoList;
