import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
      else window.location.href = '/login';
    });
    return () => unsub();
  }, []);

  const logout = () => {
    signOut(auth);
    window.location.href = '/login';
  };

  const addProduct = () => {
    const name = prompt('Product Name:');
    const price = prompt('Price:');
    const img = prompt('Image URL:');
    setProducts([...products, { name, price, img }]);
  };

  return user ? (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <img src={p.img} width="50" />
            <strong>{p.name}</strong> - ₦{p.price}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
    }
