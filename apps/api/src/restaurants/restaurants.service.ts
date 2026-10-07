import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.restaurant.findMany({
      include: {
        menuItems: true,
      },
      orderBy: { rating: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id },
      include: {
        menuItems: true,
      },
    });
  }
}
