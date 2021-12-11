/* eslint-disable prettier/prettier */
import { User } from '../user.entity';
/**
 * Represents the api's return object.
 */
export class ReturnUserDto {
  user: User;
  message: string;
}
