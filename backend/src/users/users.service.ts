import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    username: string;
    password: string;
};

// FIX
// mock data
const users: User[] = [
    {
        userId:1,
        username: "andy",
        password: "testpassanna",
    },
    {
        userId:2,
        username: "billy",
        password: "testpassbilly",
    },
    {
        userId:1,
        username: "chad",
        password: "testpasschad",
    },
];

@Injectable()
export class UsersService {
    async findUsersByName(username:string): Promise<User | undefined> {
        return users.find((user)=> user.username === username);
    };
};
