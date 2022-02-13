import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Test } from './test.entity';
import { TestService } from './test.service';

@ApiTags('Test')
@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @ApiResponse({ description: '获取所有用户', type: [Test] })
  @Get()
  getAll(@Query() query): Promise<Test[]> {
    console.log('[](query):', query);

    return this.testService.find();
  }

  @Post()
  create(): Promise<Test> {
    return this.testService.create();
  }

  @Get('hello')
  hello() {
    return 'hello world';
  }
}
