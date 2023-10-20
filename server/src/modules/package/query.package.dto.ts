import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryPackageDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  page: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  size: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(10, { message: '不能超过10个字' })
  moduleName: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(10, { message: '不能超过10个字' })
  appName: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  status: number;
}
