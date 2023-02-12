import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 150px;
  padding: 15px 5px;
  align-self: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #2f8cb1c7;
  outline: none;
  color: white;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: #2f8cb1;
  }
`;