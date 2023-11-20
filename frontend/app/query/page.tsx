import { getClient } from "@/lib/apolloClient";
import { GetMessagesQuery, GetMessagesDocument } from "@/graphql/dist/client";

export default async function QueryPage() {
  // クエリ
  const { data: queryData } = await getClient().query<GetMessagesQuery>({
    query: GetMessagesDocument,
    // context: {
    //   fetchOptions: {
    //     next: { revalidate: 100 },
    //   },
    // },
  });

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
