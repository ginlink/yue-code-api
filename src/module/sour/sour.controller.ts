import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { SourDto } from './requests/sour.dto';
import { Sour } from './sour.entity';
import { SourService } from './sour.service';

@Crud({
  model: {
    type: Sour,
  },
  routes: {
    // only: [
    //   'getOneBase',
    //   'getManyBase',
    //   'updateOneBase',
    //   'replaceOneBase',
    //   'deleteOneBase',
    // ],
  },
  query: {
    // exclude: ['updatedAt'],
    // allow: ['id', 'userId'],
  },
})
@ApiBearerAuth()
@ApiTags('Sour')
@UseGuards(AuthGuard('jwt'))
@Controller('sour')
export class SourController implements CrudController<Sour> {
  constructor(public service: SourService) {}

  @Post()
  async create(@Request() req, @Body() sourDto: SourDto) {
    console.log('[req]:', req.user);
    const { userId } = req.user;

    return this.service.create(userId, sourDto);
  }
}
