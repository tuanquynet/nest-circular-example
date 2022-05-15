import { Injectable } from "@nestjs/common";
import { ServiceB } from "../module-b";

@Injectable()
export class ServiceA {
	constructor(private serviceB: ServiceB){
		this.serviceB.helloB();
	}

	helloA() {
		console.log('Hello from A');
	}
}
