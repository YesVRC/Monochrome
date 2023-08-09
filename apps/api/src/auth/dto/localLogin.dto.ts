import { ApiProperty } from '@nestjs/swagger';

export class LocalLoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
