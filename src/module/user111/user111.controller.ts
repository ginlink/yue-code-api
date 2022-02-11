import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { User111 } from './user111.entity';
import { User111Service } from './user111.service';

@Crud({
  model: {
    type: User111,
  },
})
@Controller('user111')
export class User111Controller implements CrudController<User111> {
  constructor(public service: User111Service) {}
}
