import { Injectable } from "@nestjs/common";
import type { User } from "./user.js";
import { randomUUID } from "node:crypto";

interface UserRow extends User {
    passwordHash: string | null;
}

@Injectable()
export class UserRepository {
    private readonly rows = new Map<string,UserRow>();

    async create(
        email: string,
        { passwordHash = null, emailVerified = false}: {passwordHash?:string | null, emailVerified?: boolean} = {}
    ): Promise<User> {

        const row: UserRow = {
            id:randomUUID(),
            email: normalize(email),
            emailVerified,
            passwordHash
        }

        this.rows.set(row.id, row);
        return toUser(row);
    }

    async findById(id: string): Promise<User | null> {
        const row = this.rows.get(id);

        return row ? toUser(row) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const row = this.findRow(email);
        return row ? toUser(row) : null;
    }

    async findCredentials(email: string): Promise<{user: User; passwordHash: string | null} | null> {
        const row = this.findRow(email);
        return row ? {user: toUser(row), passwordHash:row.passwordHash} : null;
    }

    async updatePasswordHash(id:string, passwordHash: string): Promise<void> {
        const row = this.rows.get(id);
        if (row) {
            row.passwordHash = passwordHash;
        }
    }

    async updateEmail(id:string, email: string): Promise<User | null> {
        const row = this.rows.get(id);
        if (!row) {
            return null;
        }

        row.email = normalize(email);
        row.emailVerified = false;
        return toUser(row);
    }


    findRow(email: string) {
        const normalized: string = normalize(email);
        return [...this.rows.values()].find( (row) => row.email === normalized );
    }


}

function normalize(email: string): string {
    return email.trim().normalize("NFC").toLowerCase();
}

function toUser({ id, email, emailVerified }: UserRow): User {
    return { id, email, emailVerified };
}