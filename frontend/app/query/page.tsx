import { getClient } from "@/lib/apolloClient";
import {
  GetMessagesQuery,
  GetMessagesDocument,
  PostMessageDocument,
} from "@/graphql/dist/client";

export default async function Home() {
  // クエリ
  const { data: queryData } = await getClient().query<GetMessagesQuery>({
    query: GetMessagesDocument,
    // context: {
    //   fetchOptions: {
    //     next: { revalidate: 100 },
    //   },
    // },
  });

  // ミューテーション
  // const { data: mutationData } = await getClient().mutate({
  //   mutation: PostMessageDocument,
  //   variables: { user: "hisamitsu", text: "text6" },
  // });
  // console.log("ミューテーション");
  // console.log(mutationData);
  // console.log("----------");

  const messages = [...queryData.messages];
  return (
    <main>
      {messages
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((message) => (
          <div key={message.id}>
            <h1>{message.text}</h1>
          </div>
        ))}
    </main>
  );
}
