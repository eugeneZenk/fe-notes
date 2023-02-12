import { FC } from "react";
import { useForm } from "react-hook-form";
import { IMutationModal, ICreateNoteData } from "./MutationModal.type";
import { TextField } from "@mui/material";
import { StyledForm, SubmitBtn } from "./MutationModal.style";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const MutationModal: FC<IMutationModal> = ({ setVisibility, data, callback, visibility }) => {
  const {
    register,
    handleSubmit,
  } = useForm<ICreateNoteData>({
    defaultValues: { title: `${data ? data.title : ''}`, content: `${data ? data.content : ''}` },
  });
  const onSubmit = async (formData: ICreateNoteData) => {
    await callback({
      variables: { title: formData.title, content: formData.content, id: data?.id },
    });
    setVisibility(false);
  };

  if (!visibility) {
    return null;
  }

  return (
    <ModalWrapper setVisibility={setVisibility}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined"
        label="Title"
        {...register("title")}
        autoComplete="false"
        required={true}
      />
      <TextField
        id="outlined"
        multiline
        rows={7}
        label="Content"
        {...register("content")}
        autoComplete="false"
        required={true}
      />
      <SubmitBtn type="submit">Submit</SubmitBtn>
    </StyledForm>
    </ModalWrapper>
  );
};
