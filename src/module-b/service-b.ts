import { Injectable } from "@nestjs/common";
import { ServiceA } from "src/module-a";

@Injectable()
export class ServiceB {
	constructor(private serviceA: ServiceA) {
		this.serviceA.helloA();
	}
	helloB() {
		console.log('Hello from B');
	}
}
