const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const categories = [
    'Biryani',
    'Pizza',
    'Healthy',
    'Desserts',
    'Beverages',
  ];

  for (const name of categories) {
    await prisma.category.upsert({
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
    const created = await prisma.restaurant.upsert({
      where: { slug: restaurant.slug },
      update: {},
      create: restaurant,
    });

    const category = await prisma.category.findFirst({ where: { name: restaurant.cuisine === 'Healthy' ? 'Healthy' : restaurant.cuisine === 'Italian' ? 'Pizza' : 'Biryani' } });

    await prisma.menuItem.upsert({
      where: { id: `${created.id}-sample` },
      update: {},
      create: {
        id: `${created.id}-sample`,
        name: restaurant.name === 'Sunrise Bites' ? 'Paneer Biryani' : restaurant.name === 'Green Bowl' ? 'Avocado Bowl' : 'Margherita Pizza',
        description: 'Chef special',
        price: restaurant.name === 'Sunrise Bites' ? 249 : restaurant.name === 'Green Bowl' ? 199 : 329,
        imageUrl: restaurant.imageUrl,
        restaurantId: created.id,
        categoryId: category?.id,
      },
    });
  }

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@fooddelivery.app' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@fooddelivery.app',
      password: 'demo-password',
      role: 'admin',
    },
  });

  await prisma.cart.upsert({
    where: { id: `${adminUser.id}-cart` },
    update: {},
    create: {
      id: `${adminUser.id}-cart`,
      userId: adminUser.id,
    },
  });

  console.log('Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
