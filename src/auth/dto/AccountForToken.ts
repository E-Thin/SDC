import { Role } from 'src/decorator/role.enum';

export class AccountForToken {
  name: string;
  email: string;
  id: string;
  roles?: Array<Role>;
}
