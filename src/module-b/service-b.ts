import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { ServiceA } from "src/module-a";

@Injectable()
export class ServiceB {
	private serviceA: ServiceA;

	constructor( private moduleRef: ModuleRef) {
	}

	onModuleInit() {
		this.serviceA = this.moduleRef.get(ServiceA, { strict: false });
	}

	helloB() {
		console.log('Hello from B');
		this.serviceA.helloA();
	}
}
