import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { UpdateUserInput } from './dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async update(updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepository.update(updateUserInput.id, updateUserInput);
    return await this.userRepository.findOne({
      where: { id: updateUserInput.id },
    });
  }
}
