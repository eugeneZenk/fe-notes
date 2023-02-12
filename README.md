# notes-app
### Introduction
This is a React + GraphQL app to manage user notes. The main components of this app include the following:

- `graphql schema`: This defines the GraphQL schema for the app, including the Query and Mutation types and their fields. For example, the Query type includes a `notes` field that returns a list of all notes, and the Mutation type includes `createNote` and `deleteNote` fields to create and delete notes, respectively.

- `App.tsx`: This is the main component of the app, which uses the `useQuery` and `useMutation` hooks from `@apollo/client` to fetch and modify data from the GraphQL API. The component also includes state management for the modal component, which is used to create and update notes.

### Technologies used
The following technologies have been used in this project:
- React
- Apollo Client
- Material UI
- GraphQL
- Emotion
- Styled Components
- TypeScript

### GraphQL Schema
This project uses the following GraphQL schema:
```
type Query {
  note(id: ID!): Note!
  notes: [Note!]!
}

type Mutation {
  createNote(title: String!, content: String!): Note!
  updateNote(id: ID!, title: String, content: String): Note!
  deleteNote(id: ID!): Boolean!
}

type Note {
  id: ID!
  title: String!
  content: String!
}
```

### Getting started
- Clone the repository: git clone https://github.com/eugeneZenk/fe-notes.git
- Navigate to the project directory: cd notes-app
- Install the required dependencies: npm install
- Start the development server: npm start
- Open the application in your browser at http://localhost:3000