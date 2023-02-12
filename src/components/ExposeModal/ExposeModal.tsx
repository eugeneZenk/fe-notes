import { FC, useCallback } from "react";
import { IExposeModal } from "./ExposeModal.type";
import { Container } from "./ExposeModal.style";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const ExposeModal: FC<IExposeModal> = ({ data, setVisibility, visibility }) => {
  const { content, title } = data;

  const onCloseModal = useCallback(() => {
    setVisibility(false);
  }, [setVisibility])

  if (!visibility) {
    return null;
  }

  return (
    <ModalWrapper setVisibility={onCloseModal}>
      <Container>
        <h3>{title}</h3>
        <p>{content}</p>
      </Container>
    </ModalWrapper>
  );
};
