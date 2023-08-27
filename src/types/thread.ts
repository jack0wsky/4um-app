export interface Author {
  id: string;
  nickname: string;
  avatar: string;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  replies: Comment[];
}

export interface Thread {
  id: string;
  author: Author;
  title: string;
  description: string;
  comments: Comment[];
}
