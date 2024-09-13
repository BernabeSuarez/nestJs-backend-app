import { Controller, Post, Body, Get, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }
  @Post()
  async createUser(@Body(new ValidationPipe()) user: createUserDto) {
    if (await this.usersService.getUser(user.email)) {
      return 'User already exists';
    } else {
      this.usersService.createUser(user);
      return 'User created';
    }
  }
}
