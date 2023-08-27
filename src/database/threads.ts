import type { Thread } from "@/types/thread";
import { users } from "@/database/users";

export const threads: Thread[] = [
  {
    id: "f1d804a8-2865-44aa-96f2-75c9aba8c081",
    author: users.rob,
    comments: [
      {
        id: "f050d56f-649a-41fd-b266-2f88cf9353c5",
        author: users.annie,
        content: "I don't know to be honest",
        replies: [
          {
            id: "f050d56f-649a-41fd-b266-2f88cf9353c4",
            author: users.carl,
            content: "Are you sure?",
            replies: [
              {
                id: "f050d56f-649a-41fd-b266-2f88cf9353c0",
                author: users.rob,
                content: "Yes",
                replies: [
                  {
                    id: "f050d56f-649a-41fd-b266-2f88cf9353c2",
                    author: users.camile,
                    content: "How can I help you?",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            id: "f050d56f-649a-41fd-b266-2f88cf935310",
            author: users.annie,
            content: "To be honest, yes :(",
            replies: [],
          },
          {
            id: "f050d56f-649a-41fd-b266-2f88cf9353d8",
            author: users.carl,
            content: "Let's talk",
            replies: [],
          },
        ],
      },
    ],
    description: "What to do?",
    title: "Some random",
  },
  {
    id: "4d1b4321-186d-4486-b172-8de982f10276",
    author: users.camile,
    title: "Which Vue version should I learn",
    description: "I'm wondering with version should I learn first",
    comments: [],
  },
];
