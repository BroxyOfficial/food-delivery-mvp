import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantsService } from './restaurants/restaurants.service';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [SeedModule],
  controllers: [AppController, RestaurantsController],
  providers: [PrismaService, RestaurantsService],
})
export class AppModule {}
