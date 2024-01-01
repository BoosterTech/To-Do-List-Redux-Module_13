import styled from "styled-components";

export const TaskForm = styled.form`
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  min-width: 150px;
  height: 10px;
  padding: 10px;
  border: 1px solid rgb(221, 215, 215);
`;

export const Button = styled.button`
  padding: 7px;
  height: 31.6px;
  background-color: rgb(21, 117, 117);
  color: ${({ theme }) => theme.color.White};
  border: 1px solid rgb(9, 99, 99);
  transition: 0.4s;
  text-align: center;

  &:active {
    border: 1px solid black;
    border-radius: 5%;
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.color.Martini_Hover};
    cursor: pointer;
  }
`;
