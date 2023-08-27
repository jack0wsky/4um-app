import type { Author } from "@/modules/threads";

type Users = "rob" | "carl" | "annie" | "camile";

export const users: Record<Users, Author> = {
  rob: {
    id: "10905b31-fe70-4db5-a008-5e80c62f6f8e",
    nickname: "Rob",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  },
  carl: {
    id: "eda0bd51-ad20-4c67-8c67-3a80301adb90",
    nickname: "Carl",
    avatar:
      "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  },
  annie: {
    id: "53ab1734-1fb0-4ff2-b594-79ef968c7645",
    nickname: "Annie",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=20",
  },
  camile: {
    id: "224b09e9-cefe-40aa-89d2-cc3964589069",
    nickname: "Camile",
    avatar:
      "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  },
};
