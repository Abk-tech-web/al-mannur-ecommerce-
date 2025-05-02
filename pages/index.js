import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [products] = useState([
    {
      name: '50KG Dangote Sugar',
      price: '27000',
      img: '/images/dangote-sugar.jpg'
    },
    {
      name: '50KG Dangote Flour',
      price: '25000',
      img: '/images/dangote-flour.jpg'
    },
    {
      name: 'Golden Penny Spaghetti',
      price: '850',
      img: '/images/spaghetti.jpg'
    },
    {
      name: '25L Cooking Oil',
      price: '20000',
      img: '/images/cooking-oil.jpg'
    }
  ]);

  return (
    <div style={{ backgroundColor: '#222', color: '#fff', padding: '1rem' }}>
      <Head>
        <title>Al-Mannur Nigeria Enterprises</title>
      </Head>

      <header style={{ backgroundColor: '#7B3F00', padding: '1rem' }}>
        <h1>Al-Mannur Nigeria Enterprises</h1>
        <p>Dealers of All Kinds of Foodstuffs & Groceries</p>
        <small>Location: Aminu Way, Sabon Gari Main Market, Zaria, Kaduna</small><br />
        <small>Phone/WhatsApp: 08036065968</small>
      </header>

      <h2 style={{ marginTop: '2rem' }}>Our Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#333',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={item.img} alt={item.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
            <h4>{item.name}</h4>
            <p>₦{item.price}</p>
            <button style={{ backgroundColor: '#ff9900', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
