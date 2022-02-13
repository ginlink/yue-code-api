import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserDto } from './requests/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async createUser(userDto: UserDto) {
    // const user = Object.assign(new UserEntity(), userDto)
    const user = this.repo.create(userDto);
    return await this.repo.save(user);
  }

  async findUsername(username: string) {
    return await this.repo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.sours', 'sours')
      .where('user.username = :username', { username })
      .getOne();
  }

  async findAll() {
    return await this.repo.find();
  }
}
