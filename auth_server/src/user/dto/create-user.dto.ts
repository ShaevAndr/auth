import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    private email: string;

    @IsNotEmpty()
    @IsString()
    private password: string;
}

