"use client";
import { getClient } from "@/lib/apolloClient";
import {
  GetMessagesQuery,
  GetMessagesDocument,
  PostMessageDocument,
} from "@/graphql/dist/client";
import { useState } from "react";

export default function MutationPage() {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  const submit = async () => {
    // ミューテーション
    // const { data: mutationData } = await getClient().mutate({
    //   mutation: PostMessageDocument,
    //   variables: { user: "hisamitsu", text: "text6" },
    // });
    console.log("ミューテーション");
    // console.log(mutationData);
    console.log("----------");
  };

  return (
    <div>
      <div className="m-2">
        <div>user:</div>
        <input
          className="text-black"
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
        />
      </div>
      <div className="m-2">
        <div>text:</div>
        <input
          className="text-black"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </div>
      <div className="m-2">
        <button className="bg-white text-black w-12" onClick={submit}>
          登録
        </button>
      </div>
    </div>
  );
}
