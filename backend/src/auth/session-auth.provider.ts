import { Injectable } from "@nestjs/common";
import { AuthenticationRegistry, SessionCookieProvider, type SessionRecord } from "@nestjs/authentication";
import type { User } from "../users/user.js";
import { UserRepository } from "../users/users.repository.js";

@Injectable()
export class SessionAuth extends SessionCookieProvider<User> {
    constructor(
        private readonly userRepository: UserRepository,
        registry: AuthenticationRegistry,
    ) {
        super();
        registry.registerProvider(this);
    }

    validate(session: SessionRecord) {
        return this.userRepository.findById(session.userId);
        
    }
}