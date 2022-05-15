import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './module-a'
import { ModuleB } from './module-b'

@Module({
  imports: [ModuleA, ModuleB],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
