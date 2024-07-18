import { Profile } from "./ProfileResponse";

export class UserDetailForResponse {
  user: Profile;
  objectCount: {
    news: number,
    notifi: number,
    communicate: number,
    schedule: number,
  };
}