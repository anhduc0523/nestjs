import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('VN')
    phone: string;
}
