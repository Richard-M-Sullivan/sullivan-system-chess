import {IsEmail, IsString, MinLength, MaxLength} from 'class-validator';

export class SignUpDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(12)
    @MaxLength(128)
    password: string;
}