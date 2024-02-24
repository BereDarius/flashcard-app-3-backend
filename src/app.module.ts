import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FlashcardModule } from './flashcard/flashcard.module';
import { CommonModule } from './common/common.module';
import { DeckModule } from './deck/deck.module';

@Module({
  imports: [UserModule, AuthModule, FlashcardModule, CommonModule, DeckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
