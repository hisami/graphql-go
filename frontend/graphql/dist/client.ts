import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['Time']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  user: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  postMessage?: Maybe<Message>;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationPostMessageArgs = {
  text: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  messages: Array<Message>;
  todos: Array<Todo>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messagePosted: Message;
};


export type SubscriptionMessagePostedArgs = {
  user: Scalars['String']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, user: string, text: string, createdAt: any }> };

export type PostMessageMutationVariables = Exact<{
  user: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type PostMessageMutation = { __typename?: 'Mutation', postMessage?: { __typename?: 'Message', id: string, user: string, text: string, createdAt: any } | null };


export const GetMessagesDocument = gql`
    query getMessages {
  messages {
    id
    user
    text
    createdAt
  }
}
    `;
export const PostMessageDocument = gql`
    mutation postMessage($user: String!, $text: String!) {
  postMessage(user: $user, text: $text) {
    id
    user
    text
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getMessages(variables?: GetMessagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMessagesQuery>(GetMessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMessages', 'query');
    },
    postMessage(variables: PostMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostMessageMutation>(PostMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postMessage', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;