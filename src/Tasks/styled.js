import styled from "styled-components";

export const TasksList = styled.ul`
  padding: 0 35px;
  margin: 0;
  list-style: none;
  border-top: 1px solid rgb(221, 215, 215);

  @media (max-width: 768px) {
    padding: 0 3px;
  }
`;

export const ListItem = styled.li`
  display: grid;
  padding: 10px;
  border-bottom: 1px solid rgb(221, 215, 215);
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;

  ${(props) =>
    props.hidden &&
    `
    display: none;
  `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  transition: 0.3s;
  color: ${({ theme }) => theme.color.White};

  ${(props) =>
    props.done &&
    `
    background-color: #13910f;
    border: 1px solid rgb(17, 129, 13);

    &:hover {
    background-color: rgba(19, 145, 15, 0.849);
    cursor: pointer;
    }
  `}

  ${(props) =>
    props.remove &&
    `
    background-color: rgb(238, 69, 69);
    border: 1px solid rgb(248, 53, 53);

    &:hover {
    background-color: rgba(238, 69, 69, 0.863);
    cursor: pointer;
    }
  `}
`;

export const TaskContent = styled.span`
  word-break: break-word;

  ${(props) =>
    props.done &&
    `
    text-decoration: line-through;
    `}
`;
