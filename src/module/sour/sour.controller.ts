import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Sour } from './sour.entity';
import { SourService } from './sour.service';

@Crud({
  model: {
    type: Sour,
  },
})
@ApiBearerAuth()
@ApiTags('Sour')
@UseGuards(AuthGuard('jwt'))
@Controller('sour')
export class SourController implements CrudController<Sour> {
  constructor(public service: SourService) {}
}
