import { Controller, Get, Render, Request } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('home')
  home1(@Request() req) {
    return { user: req.user };
  }

  @Get('/home')
  @Render('home')
  home2(@Request() req) {
    return { user: req.user };
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
