import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User111Controller } from './user111.controller';
import { User111 } from './user111.entity';
import { User111Service } from './user111.service';

@Module({
  imports: [TypeOrmModule.forFeature([User111])],
  controllers: [User111Controller],
  providers: [User111Service],
  exports: [User111Service],
})
export class User111Module {}
