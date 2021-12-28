import { User } from './../../user/user';
export interface PhotoComment {
  id: number,
  comment: string;
  posted: Date;
  user: User;
}
