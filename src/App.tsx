import { Note, Loader } from './components';
import { MdNoteAdd } from 'react-icons/md';
import { useMutation, useQuery } from '@apollo/client';
import { GET_NOTES } from './services/queries/noteQueries';
import { INoteData } from './components/Note/Note.type';
import React, { useCallback, useState } from 'react';
import { Container, Header, NotesListWrapper } from './App.style';
import { MutationModal } from './components';
import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from './services/mutations/noteMutations';

export function App() {
  const [isMutationModalVisible, setMutationModalVisibility] = useState(false);
  const { loading, error, data } = useQuery(GET_NOTES);

  const [createNote] = useMutation(CREATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });
  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });

  const [updateNote] = useMutation(UPDATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });

  const onCreateIconClick = useCallback(() => {
    setMutationModalVisibility(true);
  }, []);

  return (
    <>
      <Container>
        <Header>
          <h1>Your Notes</h1>
          <MdNoteAdd onClick={onCreateIconClick} size="32px" style={{ cursor: 'pointer' }} />
        </Header>
        {loading && <Loader />}
        {!error && (
          <NotesListWrapper>
            {data
              ? data.notes.map((note: INoteData) => (
                  <Note data={note} deleteNote={deleteNote} updateNote={updateNote} key={note.id} />
                ))
              : []}
          </NotesListWrapper>
        )}
      </Container>
      <MutationModal
        setVisibility={setMutationModalVisibility}
        callback={createNote}
        visibility={isMutationModalVisible}
      />
    </>
  );
}
