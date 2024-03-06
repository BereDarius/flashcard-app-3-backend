import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async remove(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.delete(id);
    return user;
  }
}
