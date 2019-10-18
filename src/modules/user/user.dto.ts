import { Role } from '../role/role.entity';

export class UserDto {
  readonly name: string;
  readonly password: string;
  readonly roles: Role[];
}

// tslint:disable-next-line:max-classes-per-file
export class UpdatePasswordDto {
  readonly password: string;
  readonly newPassword: string;
}
