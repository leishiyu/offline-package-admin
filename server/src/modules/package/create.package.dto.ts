import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(10, { message: '不能超过10个字' })
  moduleName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  version: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(150, { message: '不能超过150个字' })
  updateLog: string;
}
