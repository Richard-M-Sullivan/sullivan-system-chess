import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello From App Service!';
  }

  getGoodbye(): string {
    return 'Goodbye From App Service!';
  }
}
