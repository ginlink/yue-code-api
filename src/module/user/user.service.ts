import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create() {
    const nUser = new User();
    nUser.firstName = 'Jhon';
    nUser.lastName = 'Smith';

    await this.userRepository.save(nUser);
    return nUser;
  }
  async find() {
    return this.userRepository.find();
  }
}
