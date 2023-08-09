import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import useTodoStore from "../store/todoStore";

const EditButton = styled.button`
  border-radius: 8px;
  background-color: white;
  color: #344054;
  width: 197px;
  border: #d0d5dd solid 1px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  border-radius: 8px;
  background-color: #f04438;
  border: 0;
  color: white;
  width: 97px;
  cursor: pointer;
`;
const Main = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;
const Todo = styled.li`
  display: flex;
  gap: 10px;
`;
const TodoItem = styled.p`
  width: 100%;
  border: solid 1px red;
  padding: 16px 28px;
  border: #d0d5dd solid 1px;
  border-radius: 8px;
  margin: 0;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  outline:none;
 `;

const TodoList = () => {
  const [openModel, setOpenModel] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1); 
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const editTodo = useTodoStore((state) => state.editTodo);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0); 


  return (
    <>
      <Main>
        {todos.map((todo, index) => (
          <Todo key={index}>
            <TodoItem onClick={() => toggleTodo(index)}
              style={{backgroundColor: todo.completed ? "#ECFDF3" : "transparent"}}>
              {todo.completed ? <CheckCircleIcon style={{ color: todo.completed ? "#12B76A" : "black" }} width={20} /> : ''} 
              {editingIndex === index ? 
              (<Input type="text" value={todo.text} onChange={(e) => editTodo(index, e.target.value)}/>) 
              : 
              (todo.text)
              }
            </TodoItem>
            {editingIndex !== index ? 
            (<EditButton onClick={() => setEditingIndex(index)}>Edit</EditButton>) 
            : 
            (<EditButton onClick={() => setEditingIndex(-1)}>Done</EditButton>)
            }
            <DeleteButton onClick={() => setOpenModel(true)}>
              <TrashIcon width={24} />
            </DeleteButton>
          </Todo>
        ))}
      </Main>
      {openModel && <Modal closeModal={() => setOpenModel(false)} index = {selectedTaskIndex}/>}
    </>
  );
};

export default TodoList;
