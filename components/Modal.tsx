import useTodoStore from "@/store/todoStore";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(195, 195, 195, 0.8);
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
 `;

const MainContainer = styled.div`
  width: 500px;
  height: 260px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 8px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Body = styled.div`
  display: inline;
`;
const Footer = styled.footer`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const DeleteButton = styled.button`
  background-color: #d92d20;
  color: white;
  border-radius: 8px;
  padding: 18px;
  width: 170px;
  border: 0;
`;
const CancelButton = styled.button`
  background-color: white;
  border-radius: 8px;
  padding: 18px;
  width: 170px;
  border: solid 1px #d0d5dd;
 `;

type ModalProps = {
  closeModal: (value: boolean) => void;
  index:number;
};

const Modal:React.FC<ModalProps> = ({ closeModal, index }) => {
  
  const handleDelete = () => {
    console.log("handleDelete called with index:", index);
    closeModal(false);
    deleteTodo(index);
  };
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <Container>
      <MainContainer>
        <Title>
          <div style={{
            borderRadius: '100%',
            padding: '10px',
            backgroundColor:'#FEF3F2'}}>
          <TrashIcon width={40} color="red"
          style={{
            borderRadius: '100%',
            padding: '10px',
            backgroundColor:'#FEE4E2'
          }}/>
          </div>
          <button
            style={{
              border: "0",
              background: " transparent",
              fontSize: "35px",}} 
              onClick={() => closeModal(false)}>
            X
          </button>
        </Title>
        <Body>
          <h3>Delete task</h3>
          <h3 style={{color:'rgba(195, 195, 195, 0.87)'}}>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </h3>
        </Body>
        <Footer>
          <CancelButton onClick={() => closeModal(false)}>Cancel</CancelButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </Footer>
      </MainContainer>
    </Container>
  );
};

export default Modal;
