import { Global, Module } from '@nestjs/common';
import { ServiceB } from './service-b'
// import { ModuleA } from '../module-a'

// @Global()
@Module({
  imports: [
		// ModuleA,
  ],
	providers: [ServiceB],
  exports: [ServiceB],
})
export class ModuleB {}
