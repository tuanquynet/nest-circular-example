import { forwardRef, Global, Module } from '@nestjs/common';
import { ServiceB } from './service-b'
import { ModuleA } from '../module-a'

// @Global()
@Module({
  imports: [
		forwardRef(() => ModuleA)
		// ModuleA,
  ],
	providers: [ServiceB],
  exports: [ServiceB],
})
export class ModuleB {}
