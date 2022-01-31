import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
// const TodoList = () => {
//   const [value, setValue] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setValue(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(value);
//     setValue("");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={value} placeholder="Write a to do" />
//       </form>
//     </div>
//   );
// };
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
const TodoList = () => {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <InputWrapper>
          <label>Email</label>
          <input
            {...register("Email", { required: true })}
            placeholder="Email"
          />
        </InputWrapper>
        <InputWrapper>
          <label>FirstName</label>
          <input
            {...register("FirstName", { required: true })}
            placeholder="FirstName"
          />
        </InputWrapper>
        <InputWrapper>
          <label>LastName</label>
          <input
            {...register("LastName", { required: true })}
            placeholder="LastName"
          />
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <input
            {...register("Password", { required: true })}
            placeholder="Password"
          />
        </InputWrapper>
        <InputWrapper>
          <label>Confirm Password</label>
          <input
            {...register("Confirm Password", { required: true })}
            placeholder="Confirm Password"
          />
        </InputWrapper>
        <button>Add</button>
      </form>
    </div>
  );
};
export default TodoList;
