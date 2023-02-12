import { gql } from "@apollo/client";

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`

const CREATE_NOTE = gql`
  mutation createNote($title: String!, $content: String!) {
    createNote(title: $title, content: $content) {
      id
      title
      content
    }
  }
`

const UPDATE_NOTE = gql`
  mutation updateNote($id: ID! $title: String, $content: String) {
    updateNote(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`

export { DELETE_NOTE, CREATE_NOTE, UPDATE_NOTE }