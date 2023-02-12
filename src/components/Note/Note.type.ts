import {
  ApolloCache,
  ApolloError,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables
} from "@apollo/client";

export interface INote {
  data: INoteData;
  deleteNote: (
    options?:
      | MutationFunctionOptions<
      any,
      OperationVariables,
      DefaultContext,
      ApolloCache<any>
      >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  updateNote: (
    options?:
      | MutationFunctionOptions<
      any,
      OperationVariables,
      DefaultContext,
      ApolloCache<any>
      >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  updateError?: ApolloError;
}

export interface INoteData {
  id: number;
  title: string;
  content: string;
}
