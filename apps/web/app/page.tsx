'use client';

const restaurants = [
  {
    id: 1,
    name: 'Sunrise Bites',
    cuisine: 'North Indian • South Indian',
    rating: 4.8,
    eta: 25,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Green Bowl',
    cuisine: 'Healthy • Vegan • Organic',
    rating: 4.7,
    eta: 18,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Pizza Harbor',
    cuisine: 'Italian • Wood-fired Pizza',
    rating: 4.9,
    eta: 30,
    tag: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Sushi Supreme',
    cuisine: 'Japanese • Sushi',
    rating: 4.9,
    eta: 35,
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Burger Bliss',
    cuisine: 'Fast Food • Burgers',
    rating: 4.5,
    eta: 15,
    tag: 'Quick',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Spice Route',
    cuisine: 'Indian • Fusion',
    rating: 4.6,
    eta: 22,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
];

const features = [
  { icon: '⚡', title: 'Lightning Fast', copy: 'Order in seconds and get delivery updates from kitchen to doorstep.' },
  { icon: '📍', title: 'Live Tracking', copy: 'Know exactly where your rider is with real-time doorstep tracking.' },
  { icon: '💳', title: 'Safe Payments', copy: 'Secure, seamless transactions with trusted payment methods.' },
  { icon: '⭐', title: 'Top Rated', copy: 'A handpicked set of restaurants loved by thousands of foodies.' },
  { icon: '🎁', title: 'Deals Daily', copy: 'Exclusive offers, meals, and loyalty perks for every order.' },
  { icon: '🚀', title: 'Smart Logistics', copy: 'Optimized routing to cut down waits and keep deliveries fast.' },
];

export default function HomePage() {
  return (
    <div className="page-container">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <span className="brand-mark">🍽</span>
            <span className="brand-text">FoodHub</span>
          </div>

          <div className="topbar-actions">
            <button className="link-button">Log in</button>
            <button className="primary-button">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Now serving 1000+ kitchens</div>
            <h1 className="hero-title">
              Crave it.<br />
              <span className="gradient">Order it.</span>
              <br />
              Love it.
            </h1>

            <p className="hero-subtitle">
              Discover curated food experiences from nearby favorite spots, premium kitchens, and trending restaurants — delivered with speed, style, and zero compromise.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Explore Menu</button>
              <button className="link-button">Watch Demo</button>
            </div>

            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-value">1K+</div>
                <div className="metric-label">Restaurants</div>
              </div>
              <div className="metric">
                <div className="metric-value">50K+</div>
                <div className="metric-label">Orders</div>
              </div>
              <div className="metric">
                <div className="metric-value">22m</div>
                <div className="metric-label">Delivery</div>
              </div>
              <div className="metric">
                <div className="metric-value">4.8</div>
                <div className="metric-label">Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="delivery-card">
              <div className="card-art" />

              <div className="delivery-toprow">
                <div className="status-pill">On the way</div>
              </div>

              <h2 className="delivery-name">Paneer Biryani</h2>
              <p className="delivery-sub">Sunrise Bites • 4.8 ★</p>

              <div className="progress-wrap">
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
                <div className="progress-labels">
                  <span>Cooking</span>
                  <span>Delivering</span>
                </div>
              </div>

              <div className="delivery-meta">
                <div className="meta-block">
                  <span className="meta-title">ETA</span>
                  <span className="meta-value">12 mins</span>
                </div>
                <div className="meta-block">
                  <span className="meta-title">Driver</span>
                  <span className="meta-value">Arjun</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2 className="section-title">Popular right now</h2>
            <a href="#" className="section-link">View all →</a>
          </div>

          <div className="cards-grid">
            {restaurants.map((restaurant) => (
              <article key={restaurant.id} className="rest-card">
                <div className="rest-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <span className="rest-tag">{restaurant.tag}</span>
                </div>

                <div className="rest-info">
                  <div className="rest-header">
                    <h3 className="rest-name">{restaurant.name}</h3>
                    <span className="rest-star">★ {restaurant.rating}</span>
                  </div>

                  <p className="rest-cuisine">{restaurant.cuisine}</p>

                  <div className="rest-footer">
                    <span className="rest-eta">🚴 {restaurant.eta} min</span>
                    <button className="order-button">Order now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2 className="section-title">Why people love FoodHub</h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-copy">{feature.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-wrap">
          <div className="cta-box">
            <h2>Ready for a better food experience?</h2>
            <p>
              From cozy comfort meals to premium dining, we bring your cravings closer with a 
              smoother, faster, more delightful ordering experience.
            </p>
            <button className="primary-button">Start ordering</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© 2024 FoodHub. Crafted for food lovers.</div>
          <div>Made with ❤️ for every craving.</div>
        </div>
      </footer>
    </div>
  );
}
