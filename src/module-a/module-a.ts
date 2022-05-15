import { forwardRef, Global, Module } from '@nestjs/common';
import { ServiceA } from './service-a'
import {ModuleB} from '../module-b'
// @Global()
@Module({
  imports: [
		forwardRef(() => ModuleB)
		// ModuleB,
  ],
  providers: [ServiceA],
  exports: [ServiceA],
})
export class ModuleA {}
