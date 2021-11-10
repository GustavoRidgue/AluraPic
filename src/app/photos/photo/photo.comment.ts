import { User } from './../../user/user';
export interface PhotoComment {
  comment: string;
  posted: Date;
  user: User;
}
