import { SetMetadata } from '@nestjs/common';
import { PermissionInterface } from '../interfaces/permission.interface';

export const Permissions = (...permissions: Array<Partial<PermissionInterface>>) => SetMetadata('permissions', permissions);
