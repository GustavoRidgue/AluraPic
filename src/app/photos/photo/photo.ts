import { User } from 'src/app/user/user';

export interface Photo {
  user: User;
  url: string;
  description: string;
  allowComments: boolean;
  created: Date;
  numberOfComments: number;
  comments: string[];
  numberOfLikes: number;
  usersIdLiked: number[];
}
