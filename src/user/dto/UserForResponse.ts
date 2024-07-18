import { RoleForGet } from "src/role/dto/RoleForGet";

export class UserForResponse {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  email: string;
  roles: Array<RoleForGet>;
  created_at: Date | string;
  updated_at: Date | string;
}
