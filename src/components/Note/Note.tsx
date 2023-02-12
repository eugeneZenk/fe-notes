import { MdDelete, MdModeEdit } from 'react-icons/md';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { INote } from './Note.type';
import { Content, IconBlock, NoteWrapper, Title } from './Note.style';
import { ExposeModal, MutationModal } from '../../components';

export const Note: FC<INote> = ({ data, updateNote, deleteNote }) => {
  const [isMutationModalVisible, setMutationModalVisibility] = useState(false);
  const [isExposeModalVisible, setExposeModalVisibility] = useState(false);

  const { title, content, id } = data;

  const onBtnDeleteClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      deleteNote({
        variables: { id },
      });
    },
    [deleteNote, id]
  );

  const onBtnUpdateClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setMutationModalVisibility(true);
  }, []);

  const onNoteCLick = useCallback(() => {
    setExposeModalVisibility(true);
  }, []);

  const contentPreview = useMemo(() => {
    let sliced = content.slice(0, 50);
    if (sliced.length < content.length) {
      sliced += '...';
    }
    return sliced;
  }, [content]);

  return (
    <>
      <NoteWrapper>
        <Title onClick={onNoteCLick}>{title}</Title>
        <Content onClick={onNoteCLick}>{contentPreview}</Content>
        <IconBlock>
          <MdDelete onClick={onBtnDeleteClick} size="26px" color="#d82d2d" />
          <MdModeEdit onClick={onBtnUpdateClick} size="26px" color="#5353b4" />
        </IconBlock>
      </NoteWrapper>
      {isMutationModalVisible && (
        <MutationModal
          data={data}
          callback={updateNote}
          setVisibility={setMutationModalVisibility}
          visibility={isMutationModalVisible}
        />
      )}
      {isExposeModalVisible && (
        <ExposeModal
          data={data}
          setVisibility={setExposeModalVisibility}
          visibility={isExposeModalVisible}
        />
      )}
    </>
  );
};
