import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserService {
  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
