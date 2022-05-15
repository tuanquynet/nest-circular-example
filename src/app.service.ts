import { Injectable } from '@nestjs/common';
import { ServiceA } from './module-a';

@Injectable()
export class AppService {
	constructor(private serviceA: ServiceA) {
		// If we use serviceA right the way in constructor, the ServiceA instance is not avaiable.
		setTimeout(() => {
			this.serviceA.invokeMe();
		}, 1000)
	}

  getHello(): string {
    return 'Hello World!';
  }
}
