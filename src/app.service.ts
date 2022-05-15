import { Injectable } from '@nestjs/common';
import { ServiceA } from './module-a';

@Injectable()
export class AppService {
	constructor(private serviceA: ServiceA) {}

  getHello(): string {
    return 'Hello World!';
  }
}
