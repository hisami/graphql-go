import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";

const queryTest = gql`
  query getMessages {
    messages {
      id
      text
    }
  }
`;

export default async function Home() {
  // クエリ
  const { data } = await getClient().query({
    query: queryTest,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  console.log("クエリ");
  console.log(data);
  console.log("----------");
  // ミューテーション

  // サブスクライブ
  return <main>Hello World!!</main>;
}
