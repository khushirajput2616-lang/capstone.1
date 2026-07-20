import { useState } from 'react';

const menuData = [
  { 
    "name": "Classic Cheeseburger", 
    "description": "Grilled beef patty with melted cheddar, lettuce, and house sauce.", 
    "price": 249, 
    "category": "Burgers", 
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Spicy Chicken Burger", 
    "description": "Crispy fried chicken breast topped with spicy mayo and jalapenos.", 
    "price": 279, 
    "category": "Burgers", 
    "image": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Veggie Delight Burger", 
    "description": "A flavorful mixed vegetable patty with fresh veggies and mayonnaise.", 
    "price": 199, 
    "category": "Burgers", 
    "image": "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Margherita Pizza", 
    "description": "Classic pizza with rich tomato sauce, fresh mozzarella, and basil.", 
    "price": 349, 
    "category": "Pizza", 
    "image": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Pepperoni Feast Pizza", 
    "description": "Loaded with double pepperoni slices and extra mozzarella cheese.", 
    "price": 499, 
    "category": "Pizza", 
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Farmhouse Veggie Pizza", 
    "description": "Topped with crunchy onions, capsicum, mushrooms, and sweet corn.", 
    "price": 399, 
    "category": "Pizza", 
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Paneer Tikka Starters", 
    "description": "Spiced and marinated cottage cheese cubes grilled perfectly in tandoor.", 
    "price": 299, 
    "category": "Starters", 
    "image": "https://ministryofcurry.com/wp-content/uploads/2021/01/Paneer-Tikka_-2-1.jpg" 
  },
  { 
    "name": "Crispy Spring Rolls", 
    "description": "Golden-fried rolls stuffed with seasoned shredded vegetables.", 
    "price": 159, 
    "category": "Starters", 
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Chicken Tikka Skewers", 
    "description": "Tender chicken chunks marinated in yogurt spices and charred to perfection.", 
    "price": 349, 
    "category": "Starters", 
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Chilli Potato", 
    "description": "Crispy fried potato fingers tossed in a sweet, spicy sesame-chilli sauce.", 
    "price": 179, 
    "category": "Starters", 
    "image": "https://i.ytimg.com/vi/IXQHDp3sHME/maxresdefault.jpg" 
  },
  { 
    "name": "Dal Makhani Combo", 
    "description": "Rich creamy black lentils served with 2 pieces of Butter Naan.", 
    "price": 319, 
    "category": "Main Course", 
    "image": "https://orders.popskitchen.in/storage/2024/09/Screenshot_23.png" 
  },
  { 
    "name": "Kadhai Paneer Platter", 
    "description": "Paneer cooked in a spicy gravy with bell peppers, served with Jeera Rice.", 
    "price": 349, 
    "category": "Main Course", 
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Butter Chicken Delight", 
    "description": "Classic creamy and mildly sweet chicken curry served with Laccha Paratha.", 
    "price": 389, 
    "category": "Main Course", 
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Veg Hakka Noodles", 
    "description": "Stir-fried Chinese noodles tossed with crunchy vegetables and soy sauce.", 
    "price": 219, 
    "category": "Main Course", 
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "White Sauce Pasta", 
    "description": "Penne pasta covered in a rich, velvety cheese sauce with sweet corn.", 
    "price": 259, 
    "category": "Main Course", 
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Peri Peri French Fries", 
    "description": "Crispy potato fries dusted with a spicy African peri-peri seasoning.", 
    "price": 129, 
    "category": "Sides", 
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Garlic Bread with Cheese", 
    "description": "Toasted baguette slices topped with garlic butter and melted cheese.", 
    "price": 149, 
    "category": "Sides", 
    "image": "https://therecipecritic.com/wp-content/uploads/2020/02/cheesy_garlic_bread.jpg" 
  },
  { 
    "name": "Onion Rings", 
    "description": "Crispy batter-fried onion rings served with a tangy dip.", 
    "price": 119, 
    "category": "Sides", 
    "image": "https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg" 
  },
  { 
    "name": "Virgin Mojito", 
    "description": "A refreshing mix of fresh mint, lime juice, sugar, and sparkling soda.", 
    "price": 139, 
    "category": "Beverages", 
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Cold Coffee with Ice Cream", 
    "description": "Creamy blended iced coffee topped with a rich scoop of vanilla.", 
    "price": 169, 
    "category": "Beverages", 
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Blue Lagoon Mocktail", 
    "description": "Sweet and tangy blue curaçao syrup mixed with lime and sprite.", 
    "price": 129, 
    "category": "Beverages", 
    "image": "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Mango Shake", 
    "description": "Thick and luscious seasonal mango pulp blended with chilled milk.", 
    "price": 149, 
    "category": "Beverages", 
    "image": "https://indischwindisch.com/wp-content/uploads/2021/07/Mango-Shake.jpg" 
  },
  { 
    "name": "Choco Lava Cake", 
    "description": "Decadent chocolate cake with a warm, molten chocolate center.", 
    "price": 99, 
    "category": "Dessert", 
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Sizzling Brownie", 
    "description": "Fudgy walnut brownie served over a sizzling plate with vanilla ice cream.", 
    "price": 189, 
    "category": "Dessert", 
    "image": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&auto=format&fit=crop" 
  },
  { 
    "name": "Red Velvet Cupcake", 
    "description": "Soft and fluffy red velvet cake topped with cream cheese frosting.", 
    "price": 89, 
    "category": "Dessert", 
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMfa7IDQyFTbacmW_6bD41u5ipf2FCpCA4Z-DlNQvNVtUewACzLRiwFSi&s=10" 
  }
];

export default function Home() {
  // Auth States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Delivery Details States
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Menu States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ["All", "Burgers", "Pizza", "Starters", "Main Course", "Sides", "Beverages", "Dessert"];

  const filteredMenu = selectedCategory === "All" 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (authMode === "signup" && !name)) {
      alert("Please fill all details!");
      return;
    }
    if (authMode === "signup" && name) {
      setCustomerName(name); // Signup wala naam delivery details mein auto fill ho jayega
    }
    setIsLoggedIn(true);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    alert(`${item.name} added to cart!`);
  };

  const updateQuantity = (name, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.name === name) {
            const newQty = item.quantity + amount;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const handleOrderCheckout = (e) => {
    e.preventDefault();
    if (!customerName || !phone || !address) {
      alert("Please enter your Name, Phone Number, and Delivery Address!");
      return;
    }
    alert(`🎉 Order Placed Successfully!\n\nDeliver To: ${customerName}\nPhone: ${phone}\nAddress: ${address}\nTotal Amount: ₹${grandTotal}`);
    setCart([]);
    setIsCartOpen(false);
  };

  // Calculations
  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 40;
  const grandTotal = subtotal + gst + deliveryFee;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#fff', fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", overflowX: 'hidden' }}>
      
      {/* BACKGROUND VIDEO OVERLAY */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-cooking-in-a-modern-kitchen-40344-large.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)' }}></div>
      </div>

      {!isLoggedIn ? (
        
        /* UPDATED MODERN GLASSMORPHISM LOGIN / SIGNUP CARD */
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
          <div style={{
            backgroundColor: 'rgba(20, 20, 20, 0.65)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            padding: '45px 35px',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '420px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            textAlign: 'center'
          }}>
            
            {/* BRAND LOGO */}
            <div style={{ marginBottom: '25px' }}>
              <span style={{ fontSize: '2.5rem' }}>🍔</span>
              <h1 style={{ fontSize: '1.8rem', margin: '5px 0 0 0', fontWeight: '800', letterSpacing: '1px', background: 'linear-gradient(45deg, #ffb703, #ff8800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                FOOD CRAVE
              </h1>
              <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '5px 0 0 0' }}>Taste the goodness, instantly.</p>
            </div>

            {/* TAB TOGGLES */}
            <div style={{ 
              display: 'flex', 
              backgroundColor: 'rgba(0,0,0,0.4)', 
              borderRadius: '12px', 
              padding: '4px', 
              marginBottom: '30px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <button 
                type="button"
                onClick={() => setAuthMode("login")}
                style={{ 
                  flex: 1, 
                  padding: '10px', 
                  borderRadius: '9px', 
                  border: 'none', 
                  backgroundColor: authMode === "login" ? '#ffb703' : 'transparent', 
                  color: authMode === "login" ? '#000' : '#aaa', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Log In
              </button>
              <button 
                type="button"
                onClick={() => setAuthMode("signup")}
                style={{ 
                  flex: 1, 
                  padding: '10px', 
                  borderRadius: '9px', 
                  border: 'none', 
                  backgroundColor: authMode === "signup" ? '#ffb703' : 'transparent', 
                  color: authMode === "signup" ? '#000' : '#aaa', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {authMode === "signup" && (
                <div style={{ textAlign: 'left' }}>
                  <label style={{ fontSize: '0.8rem', color: '#ffb703', marginLeft: '4px', fontWeight: 'bold' }}>FULL NAME</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rahul Sharma" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '14px', marginTop: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              )}
              
              <div style={{ textAlign: 'left' }}>
                <label style={{ fontSize: '0.8rem', color: '#ffb703', marginLeft: '4px', fontWeight: 'bold' }}>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '14px', marginTop: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ fontSize: '0.8rem', color: '#ffb703', marginLeft: '4px', fontWeight: 'bold' }}>PASSWORD</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '14px', marginTop: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              
              <button 
                type="submit" 
                style={{ 
                  backgroundColor: '#ffb703', 
                  color: '#000', 
                  border: 'none', 
                  padding: '14px', 
                  borderRadius: '10px', 
                  fontWeight: '800', 
                  fontSize: '1rem', 
                  cursor: 'pointer', 
                  marginTop: '10px',
                  boxShadow: '0 5px 20px rgba(255, 183, 3, 0.4)',
                  transition: 'transform 0.2s'
                }}
              >
                {authMode === "login" ? "CONTINUE TO MENU" : "CREATE ACCOUNT"}
              </button>
            </form>
          </div>
        </div>

      ) : (

        /* MAIN DASHBOARD SCREEN */
        <>
          {/* FLOATING CART BUTTON */}
          {cartTotalItems > 0 && (
            <div 
              onClick={() => setIsCartOpen(true)}
              style={{ 
                position: 'fixed', 
                bottom: '25px', 
                right: '25px', 
                backgroundColor: '#ffb703', 
                color: '#000', 
                padding: '14px 24px', 
                borderRadius: '30px', 
                zIndex: 90, 
                fontWeight: 'bold', 
                boxShadow: '0 8px 30px rgba(255,183,3,0.5)', 
                display: 'flex', 
                gap: '15px', 
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              <span>🛒 {cartTotalItems} Items</span>
              <span>•</span>
              <span>₹{subtotal}</span>
              <span style={{ fontSize: '0.85rem', backgroundColor: '#000', color: '#ffb703', padding: '6px 12px', borderRadius: '20px' }}>View Cart</span>
            </div>
          )}

          {/* DASHBOARD HEADER & MENU */}
          <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <div>
                <h2 style={{ margin: 0, color: '#ffb703', fontSize: '1.5rem' }}>Welcome 👋</h2>
                <p style={{ margin: '2px 0 0 0', color: '#aaa', fontSize: '0.9rem' }}>{email}</p>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)} 
                style={{ backgroundColor: 'rgba(255,50,50,0.2)', color: '#ff4d4d', border: '1px solid rgba(255,50,50,0.4)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Logout
              </button>
            </div>

            <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '10px', color: '#ffb703', fontWeight: '800' }}>Our Special Menu</h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '40px', color: '#ddd' }}>Choose your favorite meals crafted with love</p>

            {/* CATEGORIES */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)} 
                  style={{ 
                    padding: '10px 22px', 
                    borderRadius: '25px', 
                    border: selectedCategory === cat ? 'none' : '1px solid rgba(255,183,3,0.4)', 
                    backgroundColor: selectedCategory === cat ? '#ffb703' : 'rgba(0,0,0,0.4)', 
                    color: selectedCategory === cat ? '#000' : '#ffb703', 
                    cursor: 'pointer', 
                    fontWeight: 'bold', 
                    transition: 'all 0.3s ease' 
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FOOD ITEMS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
              {filteredMenu.map((item, index) => (
                <div key={index} style={{ backgroundColor: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(15px)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
                    <div style={{ padding: '18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{item.name}</h3>
                        <span style={{ color: '#ffb703', fontWeight: 'bold', fontSize: '1.2rem' }}>₹{item.price}</span>
                      </div>
                      <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: '1.4', minHeight: '38px', margin: '0 0 12px 0' }}>{item.description}</p>
                      <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(255,183,3,0.15)', color: '#ffb703', padding: '4px 10px', borderRadius: '10px', fontWeight: 'bold' }}>{item.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: '0 18px 18px 18px' }}>
                    <button 
                      onClick={() => handleAddToCart(item)} 
                      style={{ width: '100%', backgroundColor: '#ffb703', color: '#000', border: 'none', padding: '11px', borderRadius: '10px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer' }}
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CART SLIDE DRAWER WITH NAME & ADDRESS --- */}
          {isCartOpen && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: '#121212',
                height: '100%',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.7)',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff'
              }}>
                {/* CART HEADER */}
                <div style={{ padding: '20px 25px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ margin: 0, color: '#ffb703', fontSize: '1.5rem' }}>Your Basket 🛒</h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    style={{ backgroundColor: 'transparent', border: '1px solid #ffb703', color: '#ffb703', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}
                  >
                    Close [X]
                  </button>
                </div>

                {/* SCROLLABLE CART CONTENT */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                  {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '100px' }}>
                      <p style={{ fontSize: '1.1rem', color: '#aaa' }}>Your cart is empty! Add delicious meals.</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        style={{ marginTop: '15px', backgroundColor: '#ffb703', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        Browse Menu
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* ADDED ITEMS LIST */}
                      <h4 style={{ margin: '0 0 15px 0', color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Selected Items</h4>
                      {cart.map((item, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          gap: '12px',
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          padding: '12px',
                          borderRadius: '12px',
                          marginBottom: '12px',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}>
                          <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                          <div style={{ flex: 1 }}>
                            <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>{item.name}</h4>
                            <span style={{ color: '#ffb703', fontWeight: 'bold' }}>₹{item.price * item.quantity}</span>
                          </div>
                          
                          {/* QUANTITY TOGGLES */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button onClick={() => updateQuantity(item.name, -1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                            <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.name, 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', backgroundColor: '#ffb703', color: '#000', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
                          </div>

                          <button onClick={() => removeFromCart(item.name)} style={{ backgroundColor: 'transparent', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '1.1rem', padding: '4px' }}>🗑️</button>
                        </div>
                      ))}

                      {/* DELIVERY DETAILS FORM */}
                      <div style={{ marginTop: '25px', padding: '18px', backgroundColor: 'rgba(255,183,3,0.05)', borderRadius: '15px', border: '1px solid rgba(255,183,3,0.2)' }}>
                        <h4 style={{ margin: '0 0 15px 0', color: '#ffb703', fontSize: '1rem' }}>📍 Delivery Address & Details</h4>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={customerName} 
                            onChange={(e) => setCustomerName(e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                          />
                          <input 
                            type="tel" 
                            placeholder="Phone Number (10 digits)" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                          />
                          <textarea 
                            rows="3"
                            placeholder="Complete Delivery Address (House No, Street, Landmark)..." 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', resize: 'none' }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* BILL & CHECKOUT BUTTON */}
                {cart.length > 0 && (
                  <div style={{ padding: '20px 25px', borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#ccc', fontSize: '0.9rem' }}>
                      <span>Item Subtotal:</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#ccc', fontSize: '0.9rem' }}>
                      <span>GST (5%):</span>
                      <span>₹{gst}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#ccc', fontSize: '0.9rem' }}>
                      <span>Delivery Charge:</span>
                      <span>{deliveryFee === 0 ? <span style={{ color: '#00ff00', fontWeight: 'bold' }}>FREE</span> : `₹${deliveryFee}`}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.3rem', fontWeight: 'bold' }}>
                      <span>Grand Total:</span>
                      <span style={{ color: '#ffb703' }}>₹{grandTotal}</span>
                    </div>

                    <button 
                      onClick={handleOrderCheckout}
                      style={{
                        width: '100%',
                        backgroundColor: '#ffb703',
                        color: '#000',
                        border: 'none',
                        padding: '14px',
                        borderRadius: '10px',
                        fontSize: '1.1rem',
                        fontWeight: '800',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(255,183,3,0.4)'
                      }}
                    >
                      PLACE ORDER (COD)
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}