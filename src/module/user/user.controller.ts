import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import {
  UserInterceptor,
  UsersInterceptor,
} from 'src/interceptors/user.interceptor';

import { User } from './user.entity';
import { UserService } from './user.service';

@Crud({
  model: {
    type: User,
  },
  routes: {
    getManyBase: {
      decorators: [UseGuards(AuthGuard('jwt'))],
      interceptors: [UsersInterceptor],
    },
    getOneBase: {
      decorators: [UseGuards(AuthGuard('jwt'))],
      interceptors: [UserInterceptor],
    },
  },
})
@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
