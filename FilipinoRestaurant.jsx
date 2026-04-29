import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Plus, Minus } from 'lucide-react';

export default function FilipinoRestaurant() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = [
    // Filipino Favorites (Rice Meals)
    { id: 1, name: 'Chicken Adobo w/ Rice', category: 'filipinoFavorites', price: 180, image: '🍲', desc: 'Classic chicken in vinegar sauce' },
    { id: 2, name: 'Pork Adobo w/ Rice', category: 'filipinoFavorites', price: 200, image: '🍲', desc: 'Tender pork adobo' },
    { id: 3, name: 'Beef Tapa w/ Garlic Rice & Egg', category: 'filipinoFavorites', price: 220, image: '🥚', desc: 'Tapsilog - Breakfast favorite' },
    { id: 4, name: 'Longganisa w/ Garlic Rice & Egg', category: 'filipinoFavorites', price: 200, image: '🌮', desc: 'Longsilog - Sweet Filipino sausage' },
    { id: 5, name: 'Bangus w/ Garlic Rice & Egg', category: 'filipinoFavorites', price: 210, image: '🐟', desc: 'Bangsilog - Milkfish' },
    { id: 6, name: 'Chicken Inasal w/ Java Rice', category: 'filipinoFavorites', price: 190, image: '🍗', desc: 'Grilled chicken Bacolod style' },
    { id: 7, name: 'Pork BBQ Skewers w/ Rice', category: 'filipinoFavorites', price: 210, image: '🍢', desc: 'Grilled pork BBQ' },
    { id: 8, name: 'Crispy Pata w/ Rice', category: 'filipinoFavorites', price: 280, image: '🍗', desc: 'Fried pork leg' },
    { id: 9, name: 'Lechon Kawali w/ Rice', category: 'filipinoFavorites', price: 250, image: '🍖', desc: 'Crispy fried pork' },
    { id: 10, name: 'Bicol Express w/ Rice', category: 'filipinoFavorites', price: 220, image: '🌶️', desc: 'Spicy pork with coconut milk' },
    { id: 11, name: 'Kare-Kare w/ Rice', category: 'filipinoFavorites', price: 230, image: '🍲', desc: 'Peanut stew' },
    { id: 12, name: 'Sinigang na Baboy w/ Rice', category: 'filipinoFavorites', price: 210, image: '🍲', desc: 'Sour pork soup' },
    { id: 13, name: 'Sinigang na Hipon w/ Rice', category: 'filipinoFavorites', price: 240, image: '🦐', desc: 'Sour shrimp soup' },
    { id: 14, name: 'Tinolang Manok w/ Rice', category: 'filipinoFavorites', price: 190, image: '🍲', desc: 'Ginger chicken soup' },
    { id: 15, name: 'Afritada w/ Rice', category: 'filipinoFavorites', price: 210, image: '🍲', desc: 'Filipino braised dish' },
    { id: 16, name: 'Menudo w/ Rice', category: 'filipinoFavorites', price: 200, image: '🍲', desc: 'Pork liver stew' },
    { id: 17, name: 'Caldereta w/ Rice', category: 'filipinoFavorites', price: 220, image: '🍲', desc: 'Goat meat stew' },
    { id: 18, name: 'Fried Chicken Filipino Style w/ Rice', category: 'filipinoFavorites', price: 200, image: '🍗', desc: 'Crispy fried chicken' },
    { id: 19, name: 'Daing na Bangus w/ Rice', category: 'filipinoFavorites', price: 210, image: '🐟', desc: 'Milkfish in vinegar' },
    { id: 20, name: 'Lumpiang Shanghai w/ Rice', category: 'filipinoFavorites', price: 180, image: '🥟', desc: 'Spring rolls with meat' },

    // Noodles & Soups
    { id: 21, name: 'Pancit Canton', category: 'noodles', price: 140, image: '🍜', desc: 'Stir-fried noodles' },
    { id: 22, name: 'Pancit Bihon', category: 'noodles', price: 130, image: '🍜', desc: 'Rice noodle dish' },
    { id: 23, name: 'Pancit Palabok', category: 'noodles', price: 150, image: '🍜', desc: 'Shrimp flavored noodles' },
    { id: 24, name: 'Lomi Noodles', category: 'noodles', price: 120, image: '🍜', desc: 'Egg noodle soup' },
    { id: 25, name: 'Chicken Mami Soup', category: 'noodles', price: 130, image: '🍜', desc: 'Chicken noodle soup' },
    { id: 26, name: 'Beef Mami Soup', category: 'noodles', price: 140, image: '🍜', desc: 'Beef noodle soup' },
    { id: 27, name: 'Batchoy', category: 'noodles', price: 150, image: '🍜', desc: 'Meat and noodle soup' },
    { id: 28, name: 'Ramen (Chicken)', category: 'noodles', price: 160, image: '🍜', desc: 'Japanese-style noodles' },
    { id: 29, name: 'Ramen (Beef)', category: 'noodles', price: 170, image: '🍜', desc: 'Beef ramen' },
    { id: 30, name: 'Seafood Noodle Soup', category: 'noodles', price: 180, image: '🍜', desc: 'Mixed seafood noodles' },

    // Western / Fast Food
    { id: 31, name: 'Classic Cheeseburger', category: 'western', price: 120, image: '🍔', desc: 'Juicy beef with cheese' },
    { id: 32, name: 'Double Beef Burger', category: 'western', price: 150, image: '🍔', desc: 'Two patties' },
    { id: 33, name: 'Chicken Burger', category: 'western', price: 110, image: '🍔', desc: 'Crispy chicken patty' },
    { id: 34, name: 'Bacon Cheeseburger', category: 'western', price: 140, image: '🍔', desc: 'With crispy bacon' },
    { id: 35, name: 'BBQ Burger', category: 'western', price: 135, image: '🍔', desc: 'With BBQ sauce' },
    { id: 36, name: 'Crispy Chicken Sandwich', category: 'western', price: 120, image: '🥪', desc: 'Fried chicken sandwich' },
    { id: 37, name: 'Hotdog w/ Fries', category: 'western', price: 100, image: '🌭', desc: 'Classic hotdog combo' },
    { id: 38, name: 'Clubhouse Sandwich', category: 'western', price: 130, image: '🥪', desc: 'Triple decker sandwich' },
    { id: 39, name: 'Tuna Sandwich', category: 'western', price: 110, image: '🥪', desc: 'Fresh tuna mix' },
    { id: 40, name: 'Grilled Chicken Wrap', category: 'western', price: 120, image: '🌯', desc: 'Wrapped grilled chicken' },

    // Fried & Grilled Specials
    { id: 41, name: 'Fried Chicken (2 pcs)', category: 'friedGrilled', price: 160, image: '🍗', desc: 'Two pieces of crispy chicken' },
    { id: 42, name: 'Fried Chicken Bucket', category: 'friedGrilled', price: 480, image: '🍗', desc: '8 pieces chicken bucket' },
    { id: 43, name: 'Buffalo Wings', category: 'friedGrilled', price: 140, image: '🍗', desc: 'Spicy wings' },
    { id: 44, name: 'Garlic Parmesan Wings', category: 'friedGrilled', price: 150, image: '🍗', desc: 'Savory wings' },
    { id: 45, name: 'BBQ Chicken Wings', category: 'friedGrilled', price: 140, image: '🍗', desc: 'BBQ flavored wings' },
    { id: 46, name: 'Grilled Pork Belly', category: 'friedGrilled', price: 240, image: '🍖', desc: 'Grilled pork belly' },
    { id: 47, name: 'Grilled Chicken Breast', category: 'friedGrilled', price: 200, image: '🍗', desc: 'Healthy grilled chicken' },
    { id: 48, name: 'Mixed Grill Platter', category: 'friedGrilled', price: 320, image: '🍢', desc: 'Mix of grilled meats' },
    { id: 49, name: 'Chicken Skewers', category: 'friedGrilled', price: 150, image: '🍢', desc: 'Grilled chicken skewers' },
    { id: 50, name: 'Pork Skewers', category: 'friedGrilled', price: 160, image: '🍢', desc: 'Grilled pork skewers' },

    // Pasta & International
    { id: 51, name: 'Spaghetti Filipino Style', category: 'pasta', price: 150, image: '🍝', desc: 'Sweet spaghetti sauce' },
    { id: 52, name: 'Carbonara', category: 'pasta', price: 170, image: '🍝', desc: 'Creamy bacon pasta' },
    { id: 53, name: 'Bolognese Pasta', category: 'pasta', price: 160, image: '🍝', desc: 'Meat sauce pasta' },
    { id: 54, name: 'Garlic Shrimp Pasta', category: 'pasta', price: 180, image: '🍝', desc: 'Seafood pasta' },
    { id: 55, name: 'Alfredo Pasta', category: 'pasta', price: 160, image: '🍝', desc: 'Creamy pasta' },
    { id: 56, name: 'Mac & Cheese', category: 'pasta', price: 140, image: '🍝', desc: 'Cheesy pasta' },
    { id: 57, name: 'Lasagna', category: 'pasta', price: 190, image: '🍝', desc: 'Layered pasta' },
    { id: 58, name: 'Pesto Pasta', category: 'pasta', price: 160, image: '🍝', desc: 'Green pesto pasta' },
    { id: 59, name: 'Seafood Pasta', category: 'pasta', price: 200, image: '🍝', desc: 'Mixed seafood pasta' },
    { id: 60, name: 'Creamy Chicken Pasta', category: 'pasta', price: 170, image: '🍝', desc: 'Chicken cream pasta' },

    // Rice Bowls / Specials
    { id: 61, name: 'Chicken Teriyaki Bowl', category: 'riceBowls', price: 180, image: '🍚', desc: 'Sweet glazed chicken' },
    { id: 62, name: 'Beef Teriyaki Bowl', category: 'riceBowls', price: 200, image: '🍚', desc: 'Tender beef teriyaki' },
    { id: 63, name: 'Korean BBQ Beef Bowl', category: 'riceBowls', price: 210, image: '🍚', desc: 'Spicy Korean beef' },
    { id: 64, name: 'Sweet Chili Chicken Bowl', category: 'riceBowls', price: 190, image: '🍚', desc: 'Tangy chicken bowl' },
    { id: 65, name: 'Garlic Butter Shrimp Bowl', category: 'riceBowls', price: 220, image: '🍚', desc: 'Savory shrimp' },
    { id: 66, name: 'Sisig Rice Bowl', category: 'riceBowls', price: 210, image: '🍚', desc: 'Sizzling pork' },
    { id: 67, name: 'Shanghai Rice Bowl', category: 'riceBowls', price: 200, image: '🍚', desc: 'Egg rolls with rice' },
    { id: 68, name: 'Fried Chicken Rice Bowl', category: 'riceBowls', price: 190, image: '🍚', desc: 'Crispy chicken bowl' },
    { id: 69, name: 'BBQ Pork Rice Bowl', category: 'riceBowls', price: 200, image: '🍚', desc: 'Grilled pork bowl' },
    { id: 70, name: 'Vegan Veggie Rice Bowl', category: 'riceBowls', price: 160, image: '🥗', desc: 'Vegetarian bowl' },

    // Sides & Appetizers
    { id: 71, name: 'French Fries', category: 'sides', price: 80, image: '🍟', desc: 'Crispy fries' },
    { id: 72, name: 'Cheese Fries', category: 'sides', price: 100, image: '🍟', desc: 'Fries with melted cheese' },
    { id: 73, name: 'Loaded Fries', category: 'sides', price: 120, image: '🍟', desc: 'Fries with toppings' },
    { id: 74, name: 'Onion Rings', category: 'sides', price: 90, image: '🧅', desc: 'Crispy onion rings' },
    { id: 75, name: 'Mozzarella Sticks', category: 'sides', price: 110, image: '🧀', desc: 'Fried cheese sticks' },
    { id: 76, name: 'Lumpiang Shanghai (solo)', category: 'sides', price: 70, image: '🥟', desc: 'Spring rolls' },
    { id: 77, name: 'Fresh Lumpia', category: 'sides', price: 80, image: '🥟', desc: 'Fresh spring rolls' },
    { id: 78, name: 'Nachos w/ Cheese', category: 'sides', price: 100, image: '🧀', desc: 'Cheesy nachos' },
    { id: 79, name: 'Nachos w/ Beef', category: 'sides', price: 120, image: '🧀', desc: 'Nachos with ground beef' },
    { id: 80, name: 'Garlic Bread', category: 'sides', price: 70, image: '🍞', desc: 'Toasted garlic bread' },

    // Pizza
    { id: 81, name: 'Classic Cheese Pizza', category: 'pizza', price: 250, image: '🍕', desc: '10" cheese pizza' },
    { id: 82, name: 'Pepperoni Pizza', category: 'pizza', price: 280, image: '🍕', desc: 'Loaded with pepperoni' },
    { id: 83, name: 'Hawaiian Pizza', category: 'pizza', price: 290, image: '🍕', desc: 'Pineapple & ham' },
    { id: 84, name: 'BBQ Chicken Pizza', category: 'pizza', price: 300, image: '🍕', desc: 'BBQ chicken toppings' },
    { id: 85, name: 'Meat Lovers Pizza', category: 'pizza', price: 320, image: '🍕', desc: 'All meats' },
    { id: 86, name: 'Veggie Pizza', category: 'pizza', price: 270, image: '🍕', desc: 'Fresh vegetables' },
    { id: 87, name: 'Seafood Pizza', category: 'pizza', price: 310, image: '🍕', desc: 'Shrimp & calamari' },
    { id: 88, name: 'Garlic & Cheese Pizza', category: 'pizza', price: 260, image: '🍕', desc: 'Extra garlic & cheese' },
    { id: 89, name: 'Spicy Sausage Pizza', category: 'pizza', price: 290, image: '🍕', desc: 'Spicy sausage toppings' },
    { id: 90, name: 'Supreme Pizza', category: 'pizza', price: 330, image: '🍕', desc: 'Everything on it' },

    // Drinks & Refreshments
    { id: 91, name: 'Iced Tea', category: 'drinks', price: 40, image: '🧋', desc: 'Fresh iced tea' },
    { id: 92, name: 'Lemonade', category: 'drinks', price: 45, image: '🍋', desc: 'Fresh lemonade' },
    { id: 93, name: 'Soft Drinks', category: 'drinks', price: 45, image: '🥤', desc: 'Cola, Sprite, etc' },
    { id: 94, name: 'Fresh Mango Shake', category: 'drinks', price: 65, image: '🥭', desc: 'Creamy mango shake' },
    { id: 95, name: 'Banana Shake', category: 'drinks', price: 60, image: '🍌', desc: 'Banana milkshake' },
    { id: 96, name: 'Avocado Shake', category: 'drinks', price: 70, image: '🥑', desc: 'Creamy avocado' },
    { id: 97, name: 'Halo-Halo', category: 'drinks', price: 75, image: '🍨', desc: 'Mixed dessert drink' },
    { id: 98, name: 'Buko Juice', category: 'drinks', price: 55, image: '🥥', desc: 'Fresh coconut juice' },
    { id: 99, name: 'Iced Coffee', category: 'drinks', price: 60, image: '☕', desc: 'Cold coffee' },
    { id: 100, name: 'Milk Tea', category: 'drinks', price: 65, image: '🧋', desc: 'Creamy milk tea' },

    // Desserts
    { id: 101, name: 'Leche Flan', category: 'desserts', price: 80, image: '🍮', desc: 'Creamy flan' },
    { id: 102, name: 'Ube Cake', category: 'desserts', price: 90, image: '🎂', desc: 'Purple yam cake' },
    { id: 103, name: 'Chocolate Cake', category: 'desserts', price: 85, image: '🎂', desc: 'Rich chocolate cake' },
    { id: 104, name: 'Mango Float', category: 'desserts', price: 75, image: '🥭', desc: 'Layered mango dessert' },
    { id: 105, name: 'Banana Cue', category: 'desserts', price: 50, image: '🍌', desc: 'Sweet fried banana' },
    { id: 106, name: 'Turon', category: 'desserts', price: 45, image: '🍌', desc: 'Spring roll dessert' },
    { id: 107, name: 'Ice Cream Sundae', category: 'desserts', price: 85, image: '🍨', desc: 'With toppings' },
    { id: 108, name: 'Brownies', category: 'desserts', price: 70, image: '🍫', desc: 'Fudgy brownies' },
    { id: 109, name: 'Cheesecake', category: 'desserts', price: 100, image: '🍰', desc: 'Creamy cheesecake' },
    { id: 110, name: 'Cassava Cake', category: 'desserts', price: 80, image: '🎂', desc: 'Filipino cassava dessert' },
  ];

  const categories = [
    { id: 'all', label: '🇵🇭 All Items' },
    { id: 'filipinoFavorites', label: '🍲 Filipino Favorites' },
    { id: 'noodles', label: '🍜 Noodles & Soups' },
    { id: 'western', label: '🍔 Western' },
    { id: 'friedGrilled', label: '🍗 Fried & Grilled' },
    { id: 'pasta', label: '🍝 Pasta' },
    { id: 'riceBowls', label: '🍚 Rice Bowls' },
    { id: 'sides', label: '🥗 Sides' },
    { id: 'pizza', label: '🍕 Pizza' },
    { id: 'drinks', label: '🧋 Drinks' },
    { id: 'desserts', label: '🍰 Desserts' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    if (qty === 0) {
      setCart(cart.filter(c => c.id !== id));
    } else {
      setCart(cart.map(c => c.id === id ? { ...c, qty } : c));
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>
      {/* Header */}
      <header style={{
        background: '#CE1126',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>🇵🇭 FilipinoFresh</h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {currentPage === 'menu' && (
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px'
              }}
            >
              <Menu size={18} /> Filter
            </button>
          )}
          <button
            onClick={() => setCurrentPage('cart')}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px'
            }}
          >
            <ShoppingCart size={18} />
            {itemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#FFD700',
                color: '#CE1126',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 600
              }}>
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div style={{ padding: '2rem 1rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '1rem' }}>🇵🇭</div>
          <h2 style={{ fontSize: '28px', fontWeight: 600, margin: '0 0 1rem', color: '#333' }}>
            FilipinoFresh Restaurant
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
            Authentic Filipino Cuisine & More! Fresh, delicious, and always served with love. Order now and taste the flavors of the Philippines!
          </p>
          <button
            onClick={() => setCurrentPage('menu')}
            style={{
              background: '#CE1126',
              color: 'white',
              border: 'none',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '300px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#A00D1E'}
            onMouseOut={(e) => e.target.style.background = '#CE1126'}
          >
            🍳 Open Menu
          </button>
        </div>
      )}

      {/* Menu Page */}
      {currentPage === 'menu' && (
        <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '1.5rem',
            borderBottom: '2px solid #ddd'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  border: selectedCategory === cat.id ? '2px solid #CE1126' : '2px solid #ddd',
                  background: selectedCategory === cat.id ? '#CE1126' : 'white',
                  color: selectedCategory === cat.id ? 'white' : '#333',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '12px',
            marginBottom: '2rem'
          }}>
            {filteredItems.map(item => (
              <div
                key={item.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(206,17,38,0.15)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'}
              >
                <div style={{ fontSize: '35px', marginBottom: '8px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.image}
                </div>
                <h3 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 600, color: '#333', lineHeight: '1.3' }}>
                  {item.name}
                </h3>
                <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#666', lineHeight: '1.3' }}>
                  {item.desc}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ margin: '0 0 8px', fontSize: '15px', fontWeight: 700, color: '#CE1126' }}>
                    ₱{item.price}
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: '#CE1126',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#A00D1E'}
                    onMouseOut={(e) => e.target.style.background = '#CE1126'}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              background: '#f0f0f0',
              border: '1px solid #ddd',
              padding: '12px 24px',
              fontSize: '15px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 500,
              width: '100%',
              maxWidth: '300px'
            }}
          >
            ← Back to Home
          </button>
        </div>
      )}

      {/* Cart Page */}
      {currentPage === 'cart' && (
        <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 1.5rem', color: '#333' }}>
            🛒 Your Order
          </h2>

          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <p style={{ fontSize: '16px', color: '#666', marginBottom: '1rem' }}>
                Your cart is empty. Start ordering!
              </p>
              <button
                onClick={() => setCurrentPage('menu')}
                style={{
                  background: '#CE1126',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 600
                }}
              >
                Back to Menu
              </button>
            </div>
          ) : (
            <>
              <div style={{ background: 'white', borderRadius: '12px', padding: '1rem', marginBottom: '1rem', border: '1px solid #eee' }}>
                {cart.map(item => (
                  <div key={item.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                      <span style={{ fontSize: '28px' }}>{item.image}</span>
                      <div>
                        <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: '14px', color: '#333' }}>
                          {item.name}
                        </p>
                        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                          ₱{item.price} each
                        </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '4px',
                          border: '1px solid #ddd',
                          background: 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px'
                        }}
                      >
                        −
                      </button>
                      <span style={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '4px',
                          border: '1px solid #ddd',
                          background: 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px'
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: '70px', marginLeft: '12px' }}>
                      <p style={{ margin: 0, fontWeight: 700, color: '#CE1126' }}>
                        ₱{item.price * item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div style={{ background: '#FFD700', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>Subtotal:</span>
                  <span style={{ fontWeight: 600 }}>₱{total}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <span style={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>Delivery Fee:</span>
                  <span style={{ fontWeight: 600 }}>₱60</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, fontSize: '16px' }}>Total Amount:</span>
                  <span style={{ fontWeight: 700, fontSize: '18px', color: '#CE1126' }}>₱{total + 60}</span>
                </div>
              </div>

              {/* Checkout Info */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '1rem', marginBottom: '1rem', border: '1px solid #eee' }}>
                <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
                  📍 Delivery Address
                </h3>
                <input
                  type="text"
                  placeholder="Enter your address"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    marginBottom: '12px',
                    boxSizing: 'border-box',
                    fontSize: '14px'
                  }}
                />
                <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
                  📱 Phone Number
                </h3>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => setCurrentPage('menu')}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: '#333'
                }}
              >
                Continue Shopping
              </button>
              <button
                style={{
                  width: '100%',
                  padding: '14px',
                  background: '#CE1126',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 700,
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => e.target.style.background = '#A00D1E'}
                onMouseOut={(e) => e.target.style.background = '#CE1126'}
              >
                ✅ Confirm Order
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
