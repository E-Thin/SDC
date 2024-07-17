import { RoleForGet } from 'src/role/dto/RoleForGet';

export class AccountForFull {
  id: string;
  name: string;
  email: string;
  password?: string;
  phoneNumber?: string;
  refreshTokenJWT?: string;
  expriedTokenJWT?: Date;
  roles: Array<RoleForGet>;
  created_at?: Date | string;
  updated_at?: Date | string;
}
