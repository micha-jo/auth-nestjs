import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {

  private readonly users = [
    {
      id: 1, 
      username: 'jo', 
      password: '123456'

    },
    {
      id: 2, 
      username: 'joa', 
      password: '123456'

    }
  ]
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  
}
