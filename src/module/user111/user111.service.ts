import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User111 } from './user111.entity';

@Injectable()
export class User111Service extends TypeOrmCrudService<User111> {
  constructor(@InjectRepository(User111) repo) {
    super(repo);
  }
}
