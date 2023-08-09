import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserLocalDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
