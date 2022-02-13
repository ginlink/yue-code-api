import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  async create() {
    const newTest = new Test();
    newTest.firstName = 'Jhon';
    newTest.lastName = 'Smith';

    await this.testRepository.save(newTest);
    return newTest;
  }
  async find() {
    return this.testRepository.find();
  }
}
