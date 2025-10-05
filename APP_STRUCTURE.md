# 🍔 Feast Fetch - Complete Restaurant Ordering Application

## 📱 Application Pages

### Core Ordering Flow:

1. **Home** (`/`) 
   - Hero section with animated restaurant icon
   - Live statistics (500+ restaurants, 50K+ customers, 100K+ orders)
   - 6 Featured restaurant cards with ratings and offers
   - "How It Works" section (3 steps)
   - Call-to-action button

2. **Restaurants** (`/Restaurants`)
   - Search bar with real-time filtering
   - Filter by: Cuisine, Price Range, Sort Options
   - Category pills: All, Trending, Fast Delivery, Offers, Top Rated, New
   - 6 Restaurant cards with:
     - Restaurant ratings and badges
     - Delivery time and distance
     - Special offers (20% off, Free delivery, etc.)
     - Cuisine tags
     - "View Menu & Order" button

3. **Menu** (`/Menu`)
   - Restaurant header with logo, ratings, and special offers
   - Cart button with live item count
   - Sticky sidebar with menu categories
   - Menu sections:
     - **Appetizers**: Bruschetta, Mozzarella Sticks, Caesar Salad, Garlic Bread
     - **Main Course**: Grilled Salmon, Chicken Parmesan, Beef Steak
     - **Pizza**: Margherita, Pepperoni
     - **Desserts**: Tiramisu, Chocolate Lava Cake
     - **Beverages**: Orange Juice, Italian Soda
   - Add to cart functionality with animations

4. **Cart** (`/Cart`)
   - List of cart items with:
     - Quantity controls (+/-)
     - Remove button
     - Item prices
   - Order summary:
     - Subtotal
     - Delivery Fee ($2.99)
     - Service Fee ($1.50)
     - Tax (10%)
     - Total
   - Promo code input (Valid codes: FEAST20, FIRST50)
   - Delivery information
   - "Proceed to Checkout" button

5. **Checkout** (`/Checkout`)
   - Delivery details form:
     - Full name
     - Phone number
     - Delivery address
     - City & ZIP code
     - Delivery instructions
   - Payment methods:
     - Credit/Debit Card (with card details form)
     - PayPal
     - Digital Wallet (Apple Pay, Google Pay)
     - Cash on Delivery
   - Order summary
   - Estimated delivery time (30-40 min)
   - "Place Order" button

6. **Orders** (`/Orders`)
   - Success message when order is placed
   - Active orders with:
     - Real-time tracking (4 stages)
     - Order number and time
     - Restaurant details
     - Order status (Preparing, On the Way)
     - Driver information (for delivery)
     - Progress bar
     - Contact driver button
   - Order history:
     - Past orders with complete details
     - Order items breakdown
     - "Reorder" and "Rate" buttons

---

## 🎨 Features

### Animations & UI
- ✅ Floating restaurant icons
- ✅ Counter animations for statistics
- ✅ Hover effects on all cards
- ✅ Smooth page transitions
- ✅ Loading animations
- ✅ Success feedback animations
- ✅ Progress bar animations
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds

### Functionality
- ✅ Real-time search and filtering
- ✅ Persistent cart (LocalStorage)
- ✅ Live cart count in navigation
- ✅ Promo code system
- ✅ Multiple payment methods
- ✅ Order tracking
- ✅ Reorder functionality
- ✅ Responsive design (mobile/tablet/desktop)

### Smart Features
- ✅ Empty cart detection
- ✅ Form validation
- ✅ Real-time price calculations
- ✅ Smooth scroll navigation
- ✅ Active link highlighting
- ✅ Sticky navigation elements

---

## 🎯 How to Use

### For Customers:
1. **Browse** restaurants on the homepage or Restaurants page
2. **Search/Filter** by cuisine, price, or rating
3. **View Menu** of any restaurant
4. **Add Items** to your cart
5. **Review Cart** and apply promo codes
6. **Checkout** with your preferred payment method
7. **Track Order** in real-time on the Orders page

### Demo Promo Codes:
- `FEAST20` → $10 discount
- `FIRST50` → $5 discount

---

## 📊 Sample Data

### Restaurants (6 featured):
1. **The Gourmet Kitchen** - Italian, Continental (4.8⭐)
2. **Spice Paradise** - Indian, Asian (4.9⭐)
3. **Burger Haven** - American, Fast Food (4.7⭐)
4. **Sushi Master** - Japanese, Sushi (4.6⭐)
5. **Green Leaf Cafe** - Healthy, Vegan (4.9⭐)
6. **Sweet Delights** - Desserts, Bakery (4.8⭐)

### Menu Items: 15+ items across 5 categories
### Payment Options: 4 methods
### Order Tracking: 4 stages

---

## 🚀 Run the App

```bash
dotnet run
```

Then open: `http://localhost:5000` or `https://localhost:5001`

---

## 👥 Team

**Project Lead:** Asfandyar Khanzada [22k-4626]

**Members:**
- Anas Ashfaq [22k-4310]
- Asim Ali [22k-4161]  
- Anas Khan [22k-4483]
- Mohammad Anas [22k-4548]
- Ahsan Ali [22k-4176]
- Zain ul Abideen [22k-4476]

---

## 🎉 Result

A **fully functional restaurant ordering application** like Uber Eats/Food Panda with:
- Modern, animated UI
- Complete ordering workflow
- Real-time tracking
- Multiple restaurants and menu items
- Cart and checkout functionality
- Order management

**No Azure documentation. No architecture pages. Just a pure restaurant ordering app!** 🍕🍔🍰

