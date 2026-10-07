const restaurants = [
  {
    name: 'Sunrise Bites',
    cuisine: 'Indian',
    eta: '25 min',
    rating: 4.8,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Green Bowl',
    cuisine: 'Healthy',
    eta: '18 min',
    rating: 4.7,
    tag: 'Healthy',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Pizza Harbor',
    cuisine: 'Italian',
    eta: '30 min',
    rating: 4.9,
    tag: 'Top rated',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Fast delivery • Fresh food</span>
          <h1>Order your favorite meals in minutes.</h1>
          <p>
            Discover local restaurants, browse menus, and track your order live with a
            simple and delightful food delivery experience.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Explore restaurants</button>
            <button className="secondary-btn">Become a partner</button>
          </div>
          <div className="stats-row">
            <div>
              <strong>120+</strong>
              <span>Restaurants</span>
            </div>
            <div>
              <strong>1.2k</strong>
              <span>Orders today</span>
            </div>
            <div>
              <strong>4.8/5</strong>
              <span>Ratings</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-header">
            <span>Live order</span>
            <span className="status-pill">On the way</span>
          </div>
          <h3>Paneer Biryani</h3>
          <p>Sunrise Bites</p>
          <div className="progress-wrap">
            <div className="progress-bar" />
          </div>
          <div className="delivery-meta">
            <span>ETA: 12 min</span>
            <span>Rider: Arjun</span>
          </div>
        </div>
      </section>

      <section className="restaurant-section">
        <div className="section-header">
          <h2>Popular around you</h2>
          <a href="#">View all</a>
        </div>

        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <article className="restaurant-card" key={restaurant.name}>
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="restaurant-body">
                <div className="card-topline">
                  <span className="tag">{restaurant.tag}</span>
                  <span className="rating">⭐ {restaurant.rating}</span>
                </div>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisine}</p>
                <div className="card-footer">
                  <span>{restaurant.eta}</span>
                  <button>Order now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
