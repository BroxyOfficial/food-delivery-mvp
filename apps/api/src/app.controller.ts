import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      service: 'food-delivery-api',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('status')
  getStatus() {
    return {
      app: 'food-delivery-mvp',
      mode: 'mvp',
      features: ['restaurants', 'orders', 'cart', 'tracking', 'delivery'],
    };
  }
}
