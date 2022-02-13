import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserService } from '../user/user.service';
import { SourDto } from './requests/sour.dto';
import { Sour } from './sour.entity';

@Injectable()
export class SourService extends TypeOrmCrudService<Sour> {
  async create(userId: number, sourDto: SourDto) {
    const existUser = await this.userService.findOne(userId);
    const sour: Partial<Sour> = {
      ...sourDto,
      user: existUser,
    };
    const newEl = await this.repo.create(sour);
    return await this.repo.save(newEl);
  }

  constructor(@InjectRepository(Sour) repo, private userService: UserService) {
    super(repo);
  }
}
