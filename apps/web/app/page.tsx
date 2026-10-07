import './globals.css';

export const metadata = {
  title: 'Food Delivery MVP',
  description: 'MVP restaurant and delivery app foundation',
};

const restaurants = [
  { name: 'Sunrise Bites', cuisine: 'Indian', eta: '25 min', rating: 4.8 },
  { name: 'Green Bowl', cuisine: 'Healthy', eta: '18 min', rating: 4.7 },
  { name: 'Pizza Harbor', cuisine: 'Italian', eta: '30 min', rating: 4.9 },
];

export default function HomePage() {
  return (
    <main style={{ padding: '40px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <p style={{ margin: 0, color: '#fbbf24', fontWeight: 700 }}>Food Delivery MVP</p>
          <h1 style={{ margin: '8px 0 0', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Delivering great food near you</h1>
        </div>
        <button style={{ background: '#f97316', color: 'white', border: 'none', borderRadius: 10, padding: '12px 18px', fontWeight: 700 }}>
          Login
        </button>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
        <StatCard label="Restaurants" value="120+" />
        <StatCard label="Orders today" value="1.2k" />
        <StatCard label="Avg delivery" value="22 min" />
        <StatCard label="Customer rating" value="4.8/5" />
      </section>

      <section>
        <h2 style={{ marginBottom: 16 }}>Popular restaurants</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {restaurants.map((restaurant) => (
            <article key={restaurant.name} style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: 18, padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <strong>{restaurant.name}</strong>
                <span>⭐ {restaurant.rating}</span>
              </div>
              <p style={{ margin: '0 0 12px', color: '#cbd5e1' }}>{restaurant.cuisine}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#fca5a5' }}>{restaurant.eta}</span>
                <button style={{ background: '#22c55e', color: 'white', border: 'none', borderRadius: 8, padding: '8px 12px', fontWeight: 700 }}>
                  Order now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: 18, padding: 20 }}>
      <p style={{ margin: 0, color: '#94a3b8' }}>{label}</p>
      <h3 style={{ margin: '10px 0 0', fontSize: '2rem' }}>{value}</h3>
    </div>
  );
}
