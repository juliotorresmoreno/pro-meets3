import { User } from "./User";

export interface Post {
  id: string;
  user?: User;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  liked?: boolean;
}