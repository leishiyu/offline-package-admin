import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeletePackageDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;
}
