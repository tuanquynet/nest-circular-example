import { Injectable } from "@nestjs/common";

@Injectable()
export class ServiceB {
	helloB() {
		console.log('Hello from B');
	}
}
