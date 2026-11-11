import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));

// Demo catalog. Replace with a database-backed repository for production.
const menu = [
  { id: 1, name: 'NZZ Double Smash', category: 'Burgers', price: 59000, description: 'Two smashed beef patties, cheddar, pickles and NZZ sauce.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900', badge: 'BESTSELLER', popular: true },
  { id: 2, name: 'Firebird Chicken', category: 'Burgers', price: 49000, description: 'Crispy chicken, slaw, hot honey and creamy ranch.', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900', badge: 'SPICY', spicy: true },
  { id: 3, name: 'Triple Trouble', category: 'Burgers', price: 69000, description: 'Three juicy patties, smoky cheese and caramelized onion.', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=900' },
  { id: 4, name: 'Pepperoni Riot', category: 'Pizzas', price: 79000, description: 'Stone-baked crust, mozzarella and pepperoni.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=900', badge: 'POPULAR', popular: true },
  { id: 5, name: 'BBQ Chicken Pizza', category: 'Pizzas', price: 85000, description: 'Grilled chicken, smoky BBQ, red onion and mozzarella.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900' },
  { id: 6, name: 'Crispy Wings', category: 'Fried Chicken', price: 45000, description: 'Golden wings tossed in your choice of signature sauce.', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900', badge: 'SPICY', spicy: true },
  { id: 7, name: 'Crunch Chicken Box', category: 'Fried Chicken', price: 65000, description: 'Crispy chicken pieces, fries and a cool dip.', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=900' },
  { id: 8, name: 'Loaded Fire Fries', category: 'Sides', price: 29000, description: 'Crispy fries, cheese sauce, jalapeños and herbs.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900' },
  { id: 9, name: 'Mozzarella Sticks', category: 'Sides', price: 32000, description: 'Stretchy mozzarella in a crunchy golden coating.', image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=900' },
  { id: 10, name: 'Orange Blast', category: 'Drinks', price: 16000, description: 'Bright, refreshing citrus soda.', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900' },
  { id: 11, name: 'Classic Milkshake', category: 'Drinks', price: 25000, description: 'Thick vanilla milkshake with a creamy finish.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900' }
];
const orders = [];

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'NZZ FastFood API' }));
app.get('/api/menu', (_req, res) => res.json(menu));

// Promo validation is server-side; NZZ50 grants 15% off in this demo.
app.post('/api/promos/verify', (req, res) => {
  const code = String(req.body?.code || '').trim().toUpperCase();
  if (code === 'NZZ50') return res.json({ valid: true, code, discountPercent: 15 });
  return res.status(400).json({ valid: false, message: 'Promo code is not valid.' });
});

// Create an order. Production apps should persist this in a database and recalculate
// all prices from trusted menu IDs on the server before accepting payment.
app.post('/api/orders', (req, res) => {
  const { customer, items, total, payment } = req.body || {};
  if (!customer?.name || !customer?.phone || !customer?.address) {
    return res.status(400).json({ message: 'Customer name, phone and delivery address are required.' });
  }
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'An order must contain at least one item.' });
  }
  const order = {
    id: `NZZ-${Date.now().toString().slice(-7)}`,
    customer: { name: String(customer.name), phone: String(customer.phone), address: String(customer.address), notes: String(customer.notes || '') },
    items,
    total: Number(total) || 0,
    payment: String(payment || 'Cash on Delivery'),
    status: 'Order Placed',
    createdAt: new Date().toISOString()
  };
  orders.push(order);
  return res.status(201).json(order);
});

// Demo order lookup for a future customer tracking screen.
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(item => item.id === req.params.id);
  if (!order) return res.status(404).json({ message: 'Order not found.' });
  return res.json(order);
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong on the server.' });
});

app.listen(PORT, () => console.log(`NZZ FastFood API listening on http://localhost:${PORT}`));
