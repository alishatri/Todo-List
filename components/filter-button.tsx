import { IFilterButton } from "@/interfaces/IFilterButton";
import React from "react";
import { styled } from "styled-components";

const Main = styled.div`
  border: solid 1px #d0d5dd;
  text-align: center;
  border-radius: 8px;
  margin: 15px 0px;
  color: #344054;
  width: 160px;
  cursor: pointer;
`;

const FilterButton: React.FC<IFilterButton> = ({ clickEvent, label }) => {
  return (
    <Main onClick={clickEvent} >
      <p>{label}</p>
    </Main>
  );
};

export default FilterButton;
