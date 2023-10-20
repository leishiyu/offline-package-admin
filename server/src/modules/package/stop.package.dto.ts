import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StopPackageDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;
}
