import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUsersDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take: number = 10;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip: number = 0;
}
