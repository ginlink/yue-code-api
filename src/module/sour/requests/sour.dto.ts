import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SourDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly receiveTime: string;

  @ApiProperty()
  @IsString()
  readonly checkTime: string;

  @ApiProperty()
  @IsString()
  readonly checker: string;

  @ApiProperty()
  @IsString()
  readonly from: string;

  @ApiProperty()
  @IsString()
  readonly result: string;
}
