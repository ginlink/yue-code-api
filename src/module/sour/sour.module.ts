import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { SourController } from './sour.controller';
import { Sour } from './sour.entity';
import { SourService } from './sour.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sour]), UserModule],
  controllers: [SourController],
  providers: [SourService],
  exports: [SourService],
})
export class SourModule {}
