import styled from "styled-components";

export const NoteWrapper = styled.div`
  width: 30%;
  height: 150px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 25%);
  padding: 10px 20px;
  transition: all 0.3s;
  position: relative;
  background-color: white;
  border-radius: 5px
`;

export const IconBlock = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  gap: 10px;
  right: 10px;
  bottom: 10px;
  & {
    svg {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h3`
  margin: 5px 0;
  cursor: pointer;
`;

export const Content = styled.p`
  margin: 0;
  cursor: pointer;
`;
