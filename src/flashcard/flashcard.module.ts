import { Module } from '@nestjs/common';
import { CreateService } from './create/create.service';
import { UpdateService } from './update/update.service';
import { DeleteService } from './delete/delete.service';
import { ReadService } from './read/read.service';

@Module({
  providers: [CreateService, UpdateService, DeleteService, ReadService],
})
export class FlashcardModule {}
