import {
  ApolloCache,
  ApolloError,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { INoteData } from "../Note/Note.type";

export interface IMutationModal {
  setVisibility: Dispatch<SetStateAction<boolean>>;
  callback: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  visibility: boolean;
  data?: INoteData;
  error?: ApolloError;
}

export interface ICreateNoteData {
  title: string;
  content: string;
}
