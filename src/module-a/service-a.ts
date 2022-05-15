import { Injectable, OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { ServiceB } from "../module-b";

@Injectable()
export class ServiceA implements OnModuleInit {
	private serviceB: ServiceB;

	constructor( private moduleRef: ModuleRef) {
	}

	onModuleInit() {
    this.serviceB = this.moduleRef.get(ServiceB, { strict: false });
    // this.serviceB = await this.moduleRef.resolve(ServiceB,);
  }

	helloA() {
		console.log('Hello from A');
	}

	invokeMe() {
		this.serviceB.helloB();
	}
}
