import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(user: User) {
    const createUser = new this.userModel(user);
    return await createUser.save();
  }
  async getUsers() {
    return await this.userModel.find();
  }

  async getUser(email: string) {
    return await this.userModel.findOne({ email });
  }
}
