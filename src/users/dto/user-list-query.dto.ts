/* eslint-disable prettier/prettier */
import { BaseQueryParametersDto } from 'src/configs/base-query-parameters.dto';

/**
 *
 */
export class UserFindQueryDto extends BaseQueryParametersDto {
  name: string;
  email: string;
}
