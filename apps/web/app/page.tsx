'use client';

import { useState, useEffect } from 'react';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  eta: number;
  tag: string;
  imageUrl: string;
}

const restaurantsData: Restaurant[] = [
  {
    id: '1',
    name: 'Sunrise Bites',
    cuisine: 'North Indian • South Indian',
    rating: 4.8,
    eta: 25,
    tag: 'Popular',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    name: 'Green Bowl',
    cuisine: 'Healthy • Vegan • Organic',
    rating: 4.7,
    eta: 18,
    tag: 'Trending',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    name: 'Pizza Harbor',
    cuisine: 'Italian • Wood-fired Pizza',
    rating: 4.9,
    eta: 30,
    tag: 'Top Rated',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '4',
    name: 'Spice Route',
    cuisine: 'Indian • Fusion',
    rating: 4.6,
    eta: 22,
    tag: 'New',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '5',
    name: 'Burger Bliss',
    cuisine: 'Fast Food • Burgers',
    rating: 4.5,
    eta: 15,
    tag: 'Quick',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '6',
    name: 'Sushi Supreme',
    cuisine: 'Japanese • Sushi',
    rating: 4.9,
    eta: 35,
    tag: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
];

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Order and get food delivered in minutes, not hours.',
  },
  {
    icon: '🔒',
    title: 'Secure & Safe',
    description: 'Your payments and data are protected with industry-standard encryption.',
  },
  {
    icon: '📍',
    title: 'Live Tracking',
    description: 'Real-time location updates so you know exactly when your food arrives.',
  },
  {
    icon: '⭐',
    title: 'Best Quality',
    description: 'Handpicked restaurants with top-rated food and service.',
  },
  {
    icon: '💰',
    title: 'Great Deals',
    description: 'Exclusive offers and rewards on every order.',
  },
  {
    icon: '🚀',
    title: 'Smart Delivery',
    description: 'AI-powered routing for the fastest delivery experience.',
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-brand">FoodHub</div>
        <div className="navbar-actions">
          <button className="btn-nav">Sign In</button>
          <button className="btn-nav" style={{ background: 'rgba(255, 107, 53, 0.8)' }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Now serving 1000+ restaurants</span>

          <h1 className="hero-title">Crave it, Order it, Savor it.</h1>

          <p className="hero-description">
            Discover the finest dining experience delivered to your doorstep. From local favorites to premium restaurants, find your next favorite meal.
          </p>

          <div className="hero-cta">
            <button className="btn-primary">🔍 Explore Now</button>
            <button className="btn-secondary">📱 Download App</button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">1K+</div>
              <div className="stat-label">Restaurants</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Happy Orders</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">22 min</div>
              <div className="stat-label">Avg. Delivery</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4.8/5</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="order-card">
            <div className="order-header">
              <div>
                <div className="order-status">✓ On the way</div>
              </div>
            </div>

            <h2 className="order-title">Paneer Biryani</h2>
            <p className="order-subtitle">Sunrise Bites • 4.8 ⭐</p>

            <div className="order-progress">
              <div className="progress-bar">
                <div className="progress-fill" />
              </div>
              <div className="progress-text">
                <span>Order confirmed</span>
                <span>Delivering</span>
              </div>
            </div>

            <div className="order-meta">
              <div className="meta-item">
                <span className="meta-label">ETA</span>
                <span className="meta-value">12 mins</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Rider</span>
                <span className="meta-value">Arjun Singh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="restaurants-section">
        <div className="section-header">
          <h2 className="section-title">Popular Right Now</h2>
          <a href="#" className="view-all-link">
            View All →
          </a>
        </div>

        <div className="restaurants-grid">
          {restaurantsData.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-image">
                <img src={restaurant.imageUrl} alt={restaurant.name} />
                <span className="restaurant-badge">{restaurant.tag}</span>
              </div>

              <div className="restaurant-info">
                <div className="restaurant-header">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <div className="restaurant-rating">⭐ {restaurant.rating}</div>
                </div>

                <p className="restaurant-cuisine">{restaurant.cuisine}</p>

                <div className="restaurant-footer">
                  <span className="restaurant-eta">🚴 {restaurant.eta} min</span>
                  <button className="btn-order">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h2 className="section-title">Why Choose FoodHub?</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Taste Something Great?</h2>
        <p className="cta-desc">Join thousands of satisfied customers enjoying delicious meals delivered fresh to their door.</p>
        <button className="btn-primary" style={{ marginBottom: '0' }}>
          Start Ordering Now
        </button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p className="footer-text">© 2024 FoodHub. Delivering happiness, one meal at a time.</p>
          <p className="footer-text">Made with ❤️ for food lovers everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
