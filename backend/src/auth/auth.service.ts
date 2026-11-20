import { Injectable, NotImplementedException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

type AuthInput = {
    username: string;
    password: string;
}

type SignInData = {
    userId:   number;
    username: string;
}

type AuthResult = {
    accessToken: string;
    userId:      number;
    username:    string;
}

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){};

    async authenticateUser(input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException;
        }

        // TODO return an actual access token
        return {
            "accessToken": "valid",
            "userId": user.userId,
            "username": user.username,
        }
        
    }

    async validateUser(input: AuthInput): Promise<SignInData | null> {
        const user = await this.usersService.findUsersByName(input.username);

        if (user && user.password === input.password) {
            return {
                "userId":user.userId,
                "username":user.username
            };
        }

        return null;
    }
}
