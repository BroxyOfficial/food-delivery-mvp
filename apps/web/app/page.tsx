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
];

const categories = [
  { name: 'Biryani', emoji: '🥘', color: '#ff8a62' },
  { name: 'Pizza', emoji: '🍕', color: '#ff4fa2' },
  { name: 'Healthy', emoji: '🥗', color: '#7ae7d1' },
  { name: 'Desserts', emoji: '🍰', color: '#f7c873' },
  { name: 'Beverages', emoji: '🥤', color: '#7cc7ff' },
  { name: 'Vegan', emoji: '🌿', color: '#72d59b' },
];

const features = [
  { icon: '⚡', title: 'Lightning Fast', copy: 'Order in seconds and get live status updates across the journey.' },
  { icon: '📍', title: 'Live Tracking', copy: 'Follow your rider in real time from kitchen prep to your doorstep.' },
  { icon: '💳', title: 'Safe Payments', copy: 'Secure transactions with trusted checkout experiences and wallet support.' },
  { icon: '⭐', title: 'Top Rated', copy: 'Food you trust, from handpicked restaurants loved by local diners.' },
  { icon: '🎁', title: 'Daily Deals', copy: 'Unlock exclusive promos, cashback offers, and loyalty rewards.' },
  { icon: '🚀', title: 'Smart Routing', copy: 'Optimized delivery logistics to keep food fresh and timing accurate.' },
];

const steps = [
  { number: '01', title: 'Choose your craving', copy: 'Browse fresh menus, trending favorites, and premium picks nearby.' },
  { number: '02', title: 'Add & pay', copy: 'Customize your order, apply offers, and checkout in seconds.' },
  { number: '03', title: 'Track live', copy: 'Watch your order move from kitchen prep to doorstep arrival.' },
];

const reviews = [
  {
    name: 'Aarav',
    quote: 'The food arrived faster than expected and looked as good as the photos. Premium vibe all the way.',
  },
  {
    name: 'Meera',
    quote: 'Beautiful app, smooth ordering, and the tracking experience is honestly next-level.',
  },
  {
    name: 'Karan',
    quote: 'This feels like a luxury food-tech brand, not just a delivery app. Super polished.',
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <span className="brand-mark">🍽</span>
            <span className="brand-text">FoodHub</span>
          </div>

          <nav className="nav-links">
            <a href="#discover">Discover</a>
            <a href="#featured">Featured</a>
            <a href="#how-it-works">How it works</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <div className="topbar-actions">
            <button className="ghost-button">Log in</button>
            <button className="primary-button">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="discover">
          <div className="hero-copy">
            <div className="eyebrow">Now serving 1000+ kitchens</div>

            <h1 className="hero-title">
              Crave it.<br />
              <span className="gradient-text">Order it.</span><br />
              Love it.
            </h1>

            <p className="hero-subtitle">
              Discover curated food experiences from nearby favorite spots, premium kitchens, and trending restaurants — delivered with speed, style, and zero compromise.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Explore menu</button>
              <button className="secondary-button">Watch demo</button>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">1K+</div>
                <div className="stat-label">Restaurants</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">50K+</div>
                <div className="stat-label">Orders</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">22m</div>
                <div className="stat-label">Avg. delivery</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">4.8</div>
                <div className="stat-label">Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="floating-badge badge-one">🔥 20% off</div>
            <div className="floating-badge badge-two">⭐ 4.9 rated</div>

            <div className="delivery-card">
              <div className="delivery-art" />

              <div className="delivery-head">
                <span className="status-pill">On the way</span>
              </div>

              <div className="delivery-body">
                <h2>Paneer Biryani</h2>
                <p>Sunrise Bites • 4.8 ★</p>
              </div>

              <div className="progress-block">
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
                <div className="progress-meta">
                  <span>Cooking</span>
                  <span>Delivering</span>
                </div>
              </div>

              <div className="delivery-meta">
                <div>
                  <span className="meta-label">ETA</span>
                  <strong>12 mins</strong>
                </div>
                <div>
                  <span className="meta-label">Driver</span>
                  <strong>Arjun</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section" aria-label="Food categories">
          <div className="section-head">
            <div>
              <div className="mini-kicker">Explore</div>
              <h2 className="section-title">Find your hunger match</h2>
            </div>
            <button className="text-button">Browse all</button>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button key={category.name} className="category-pill" style={{ borderColor: category.color }}>
                <span className="category-emoji" style={{ background: `${category.color}22`, color: category.color }}>
                  {category.emoji}
                </span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="featured">
          <div className="section-head">
            <div>
              <div className="mini-kicker">Featured</div>
              <h2 className="section-title">Popular right now</h2>
            </div>
            <a className="section-link" href="#">View all →</a>
          </div>

          <div className="cards-grid">
            {restaurants.map((restaurant) => (
              <article key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <span className="restaurant-badge">{restaurant.tag}</span>
                </div>

                <div className="restaurant-info">
                  <div className="restaurant-header">
                    <h3>{restaurant.name}</h3>
                    <span className="rating-pill">★ {restaurant.rating}</span>
                  </div>

                  <p>{restaurant.cuisine}</p>

                  <div className="restaurant-footer">
                    <span className="eta-pill">🚴 {restaurant.eta} min</span>
                    <button className="order-button">Order now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-head centered">
            <div>
              <div className="mini-kicker">Simple</div>
              <h2 className="section-title">How it works</h2>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section features-section">
          <div className="section-head">
            <div>
              <div className="mini-kicker">Why choose us</div>
              <h2 className="section-title">Built for flavor and speed</h2>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section review-section" id="reviews">
          <div className="section-head centered">
            <div>
              <div className="mini-kicker">Loved by customers</div>
              <h2 className="section-title">What people are saying</h2>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="review-stars">★★★★★</div>
                <p>“{review.quote}”</p>
                <div className="review-user">{review.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-box">
            <div className="mini-kicker">Ready to start?</div>
            <h2>Ready for a better food experience?</h2>
            <p>
              From cozy comfort meals to premium dining, we bring your cravings closer with a smoother, faster, more delightful ordering experience.
            </p>
            <button className="primary-button">Start ordering</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="brand small-brand">
            <span className="brand-mark">🍽</span>
            <span className="brand-text">FoodHub</span>
          </div>
          <span>© 2024 FoodHub. Crafted for food lovers.</span>
          <span>Made with ❤️</span>
        </div>
      </footer>
    </div>
  );
}
