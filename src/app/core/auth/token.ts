import { User } from 'src/app/user/user';

export class Token {
  constructor(
    public token: string,
    public created: Date,
    public expiration:  Date,
    public user: User) {}
}
