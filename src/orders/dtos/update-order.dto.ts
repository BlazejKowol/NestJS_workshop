import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 80)
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 25)
  client: string;

  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}