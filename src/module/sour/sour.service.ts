import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Sour } from './sour.entity';

@Injectable()
export class SourService extends TypeOrmCrudService<Sour> {
  constructor(@InjectRepository(Sour) repo) {
    super(repo);
  }
}
