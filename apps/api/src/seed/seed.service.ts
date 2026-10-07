import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}

  async onApplicationBootstrap() {
    const count = await this.prisma.restaurant.count();
    if (count > 0) return;

    const categories = ['Biryani', 'Pizza', 'Healthy'];

    for (const name of categories) {
      await this.prisma.category.upsert({
        where: { name },
        update: {},
        create: { name },
      });
    }

    const restaurants = [
      {
        name: 'Sunrise Bites',
        slug: 'sunrise-bites',
        description: 'North and South Indian comfort food with a modern twist.',
        cuisine: 'Indian',
        etaMinutes: 25,
        rating: 4.8,
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Green Bowl',
        slug: 'green-bowl',
        description: 'Healthy bowls, wraps, and smoothies for the on-the-go lifestyle.',
        cuisine: 'Healthy',
        etaMinutes: 18,
        rating: 4.7,
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Pizza Harbor',
        slug: 'pizza-harbor',
        description: 'Wood-fired pizzas and cheesy classics.',
        cuisine: 'Italian',
        etaMinutes: 30,
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
      },
    ];

    for (const restaurant of restaurants) {
      const created = await this.prisma.restaurant.create({
        data: {
          name: restaurant.name,
          slug: restaurant.slug,
          description: restaurant.description,
          cuisine: restaurant.cuisine,
          etaMinutes: restaurant.etaMinutes,
          rating: restaurant.rating,
          imageUrl: restaurant.imageUrl,
        },
      });

      const categoryName = restaurant.cuisine === 'Healthy' ? 'Healthy' : restaurant.cuisine === 'Italian' ? 'Pizza' : 'Biryani';
      const category = await this.prisma.category.findUnique({ where: { name: categoryName } });

      await this.prisma.menuItem.create({
        data: {
          name: restaurant.name === 'Sunrise Bites' ? 'Paneer Biryani' : restaurant.name === 'Green Bowl' ? 'Avocado Bowl' : 'Margherita Pizza',
          description: 'Chef special',
          price: restaurant.name === 'Sunrise Bites' ? 249 : restaurant.name === 'Green Bowl' ? 199 : 329,
          imageUrl: restaurant.imageUrl,
          restaurantId: created.id,
          categoryId: category?.id,
        },
      });
    }
  }
}
