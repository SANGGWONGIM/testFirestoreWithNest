import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // @Get('/user')
  // findUser() {
  //   return this.appService.findUser();
  // }

  @Post('/user')
  createUser(@Body() name) {
    return this.appService.createUser(name);
  }

  @Patch('/user/:uuid')
  updateUser(@Param('uuid') uuid: string, @Body() name) {
    return this.appService.updateUser(uuid, name)
  }

  @Delete('/user/:uuid')
  deleteUser(@Param('uuid') uuid: string) {
    return this.appService.deleteUser(uuid)
  }
}
