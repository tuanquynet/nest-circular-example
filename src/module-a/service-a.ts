import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ServiceB } from "../module-b";

@Injectable()
export class ServiceA {
	constructor(
		@Inject(forwardRef(() => ServiceB))
		private serviceB: ServiceB
	){
		this.serviceB.helloB();
	}

	helloA() {
		console.log('Hello from A');
	}
}
