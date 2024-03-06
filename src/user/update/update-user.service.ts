import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserService {
  update(id: string) {
    return `This action updates a #${id} user`;
  }
}
