# 🍔 Feast Fetch - Restaurant Ordering System

**Your go-to platform for ordering delicious food from your favorite restaurants!**

---

## 🚀 Quick Start

### Option 1: Run Locally (Development)

```bash
dotnet run
```

Then open your browser to `https://localhost:5001` or `http://localhost:5000`

### Option 2: Run with Docker (Recommended)

#### Prerequisites
- [Docker](https://www.docker.com/get-started) installed and running
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

#### Production Mode

Build and run the application in production mode:

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at:
- **HTTP**: `http://localhost:8080`
- **HTTPS**: `http://localhost:8081`

#### Development Mode (with Hot Reload)

For development with automatic code reloading:

```bash
# Build and start in development mode
docker-compose -f docker-compose.dev.yml up

# Stop the container
docker-compose -f docker-compose.dev.yml down
```

The application will be available at:
- **HTTP**: `http://localhost:5000`
- **HTTPS**: `https://localhost:5001`

#### Docker Commands Reference

```bash
# Build the image
docker build -t feast-fetch:latest .

# Run a container
docker run -d -p 8080:8080 --name feast-fetch-web feast-fetch:latest

# View running containers
docker ps

# View logs
docker logs -f feast-fetch-web

# Stop container
docker stop feast-fetch-web

# Remove container
docker rm feast-fetch-web

# Remove image
docker rmi feast-fetch:latest
```

#### Docker Compose Commands

```bash
# Start services in detached mode
docker-compose up -d

# Start services and view logs
docker-compose up

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild images
docker-compose build

# Rebuild and start
docker-compose up -d --build

# View logs
docker-compose logs -f feast-fetch-web

# Execute commands in container
docker-compose exec feast-fetch-web bash
```

---

## ✨ Features

### 🏠 **Browse Restaurants**
- Discover 500+ partner restaurants
- Filter by cuisine, price range, and ratings
- Real-time search functionality
- View ratings, delivery time, and special offers

### 📋 **View Menus**
- Browse complete restaurant menus
- Multiple categories: Appetizers, Main Course, Pizza, Desserts, Beverages
- See prices and descriptions
- Special dietary tags

### 🛒 **Order Food**
- Add items to cart with one click
- Adjust quantities easily
- Apply promo codes for discounts
- Real-time price calculations

### 💳 **Checkout**
- Multiple payment options:
  - Credit/Debit Cards
  - PayPal
  - Digital Wallets (Apple Pay, Google Pay)
  - Cash on Delivery
- Secure payment processing
- Delivery address management

### 📦 **Track Orders**
- Real-time order tracking
- 4-stage progress indicator:
  1. Order Placed
  2. Preparing
  3. On the Way
  4. Delivered
- Driver contact information
- Estimated delivery time
- Order history with reorder option

---

## 🎨 Pages

- **Home** (`/`) - Featured restaurants and quick stats
- **Restaurants** (`/Restaurants`) - Browse all restaurants with filters
- **Menu** (`/Menu`) - View restaurant menus and add items to cart
- **Cart** (`/Cart`) - Review and manage your order
- **Checkout** (`/Checkout`) - Complete your order with payment
- **Orders** (`/Orders`) - Track active orders and view order history

---

## 🎯 Promo Codes

Try these promo codes at checkout:
- **FEAST20** - Get $10 off
- **FIRST50** - Get $5 off

---

## 👥 Development Team

**Project Lead:**  
Asfandyar Khanzada [22k-4626]

**Team Members:**  
- Anas Ashfaq [22k-4310]
- Asim Ali [22k-4161]
- Anas Khan [22k-4483]
- Mohammad Anas [22k-4548]
- Ahsan Ali [22k-4176]
- Zain ul Abideen [22k-4476]

---

## 🛠️ Technology Stack

- ASP.NET Core 8.0 (Razor Pages)
- Bootstrap 5
- Bootstrap Icons
- Modern CSS with animations
- LocalStorage for cart persistence
- Docker & Docker Compose (containerization)

---

## 📱 Features

✅ Modern, animated UI  
✅ Fully responsive design  
✅ Real-time cart updates  
✅ Persistent cart (survives page refresh)  
✅ Search and filter restaurants  
✅ Multiple payment methods  
✅ Order tracking  
✅ Promo code system  
✅ Order history  

---

## 🐳 Docker Architecture

The project is fully containerized and ready for production deployment:

### Current Setup
- **Frontend Web Application**: ASP.NET Core Razor Pages application
- **Multi-stage Dockerfile**: Optimized for production with minimal image size
- **Docker Compose**: Easy orchestration for development and production
- **Development Dockerfile**: Hot reload support for faster development

### Future Backend Integration

The Docker setup is designed to easily accommodate a backend API:

1. **Backend Service**: Uncomment the `feast-fetch-api` service in `docker-compose.yml`
2. **Database**: Uncomment the `feast-fetch-db` service when needed
3. **Network**: All services communicate via the `feast-fetch-network` bridge network

To add a backend:
1. Create your backend project in a `backend/` directory
2. Add a `Dockerfile` in the backend directory
3. Uncomment and configure the backend service in `docker-compose.yml`
4. Update environment variables and connection strings as needed

### Docker Files Overview

- **`Dockerfile`**: Production-ready multi-stage build
- **`Dockerfile.dev`**: Development build with hot reload
- **`docker-compose.yml`**: Production orchestration
- **`docker-compose.dev.yml`**: Development orchestration
- **`.dockerignore`**: Excludes unnecessary files from Docker context

### Environment Variables

The application uses the following environment variables:

- `ASPNETCORE_ENVIRONMENT`: Set to `Production` or `Development`
- `ASPNETCORE_URLS`: URLs the application listens on

You can override these in `docker-compose.yml` or pass them via `-e` flag in `docker run`.

---

## 🎉 Ready to Order!

Experience the future of food delivery with Feast Fetch!

**Built with ❤️ by the Feast Fetch Team**
