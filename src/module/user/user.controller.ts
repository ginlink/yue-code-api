import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({ description: '获取所有用户', type: [User] })
  @Get()
  getAll(@Query() query): Promise<User[]> {
    console.log('[](query):', query);

    return this.userService.find();
  }

  @Post()
  create(): Promise<User> {
    return this.userService.create();
  }

  @Get('hello')
  hello() {
    return 'hello world';
  }
}
