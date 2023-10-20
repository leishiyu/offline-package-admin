import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetLatestPackageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  appName: string;
}
