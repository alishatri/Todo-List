import React, { useState } from "react";
import styled from "styled-components";
import useTodoStore from "../store/todoStore";

const StyledButton = styled.button`
  background-color: #12b76a;
  color: white;
  border-radius: 8px;
  padding: 1rem;
  border: 0;
  width: 226px;
  cursor: pointer;
 `;
const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 16px 28px;
  font-size: 18px;
  border: 1px solid #d0d5dd;
 `;
const Form = styled.form`
  display: flex;
  gap: 10px;
`;

const AddNewTodo = () => {

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    const text = e.target.todoText.value;
    addTodo(text);
    e.target.todoText.value = "";
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <StyledInput
        type="text"
        placeholder="Write you task here..."
        name='todoText'
      />
      <StyledButton type="submit">Create</StyledButton>
    </Form>
  );
};

export default AddNewTodo;
