import { Module } from '@nestjs/common';
import { CreateService } from './create/create.service';
import { UpdateService } from './update/update.service';
import { DeleteService } from './delete/delete.service';
import { ReadService } from './read/read.service';
import { DeckController } from './deck.controller';

@Module({
  providers: [CreateService, UpdateService, DeleteService, ReadService],
  controllers: [DeckController]
})
export class DeckModule {}
