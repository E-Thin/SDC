import { RoleForGet } from 'src/role/dto/RoleForGet';

export class AdminAccountForResponse {
  id: string;
  name?: string;
  email?: string;
  roles: Array<RoleForGet>;
  phoneNumber?: string;
}
