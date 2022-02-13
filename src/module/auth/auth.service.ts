import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async findAll(): Promise<any[]> {
    return await this.userService.find();
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUsername(username);
    console.log('-----------Login-----------');
    if (user && bcrypt.compareSync(pass, user.password)) {
      return user;
    }
    return null;
  }

  async register(user: any) {
    let userData: any;
    userData = await this.userService.findUsername(user.username);
    if (userData) {
      return { statusCode: 400, message: 'This username already exists' };
    }
    await this.userService.createUser(user);
    userData = await this.userService.findUsername(user.username);
    return {
      username: userData.username,
      statusCode: 201,
    };
  }

  async login(user: any) {
    return this.userService.findUsername(user.username).then((userData) => {
      const Token = this.createToken(userData);
      delete userData.password;

      return {
        statusCode: 200,
        data: {
          token: Token,
          ...userData,
        },
      };
    });
  }

  createToken(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
