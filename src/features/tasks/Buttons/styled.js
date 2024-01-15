import styled from "styled-components";

export const ButtonsWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 10px;
    gap: 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.Tundora};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.Black};
    cursor: pointer;
  }

  &:click {
    font-size: x-large;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.Martini};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-basis: 100%;
    margin: 10px;
    width: 121px;
    max-width: 121px;
  }
`;
