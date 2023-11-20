import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";

const queryTest = gql`
  query getMessages {
    messages {
      id
      user
      text
      createdAt
    }
  }
`;

const mutationTest = gql`
  mutation postMessage($user: String!, $text: String!) {
    postMessage(user: $user, text: $text) {
      id
      user
      text
      createdAt
    }
  }
`;

const subscribeTest = gql`
  subscription subscribeMessage {
    messagePosted(user: "hisa") {
      id
      user
      text
      createdAt
    }
  }
`;

export default async function Home() {
  // クエリ
  const { data: queryData } = await getClient().query({
    query: queryTest,
    context: {
      fetchOptions: {
        next: { revalidate: 1 },
      },
    },
  });
  console.log("クエリ");
  console.log(queryData);
  console.log("----------");

  // ミューテーション
  const { data: mutationData } = await getClient().mutate({
    mutation: mutationTest,
    variables: { user: "hisa1", text: "text1" },
  });
  console.log("ミューテーション");
  console.log(mutationData);
  console.log("----------");

  // サブスクライブ
  return <main>Hello World!!</main>;
}
