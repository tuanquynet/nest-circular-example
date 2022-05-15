import { Global, Module } from '@nestjs/common';
import { ServiceB } from './service-b'

// @Global()
@Module({
  imports: [
  ],
	providers: [ServiceB],
  exports: [ServiceB],
})
export class ModuleB {}
