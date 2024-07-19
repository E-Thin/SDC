import { Role } from 'src/decorator/role.enum';

export class AccountForToken {
  id: string;
  name: string;
  email: string;
  roles?: Array<Role>;
}
