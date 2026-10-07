# 🍽️ Food Delivery MVP - Easy Setup Guide

## What is this project?
This is a **food delivery app** like Zomato or Swiggy with 3 parts:
- **Web**: Customer landing page (Next.js)
- **API**: Backend server (NestJS)
- **Mobile**: Mobile app (React Native)

---

## ✅ Quick Start (5 minutes)

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download **LTS version** (Long Term Support)
3. Install it
4. Open Terminal/PowerShell and verify:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Download the Project
```bash
git clone https://github.com/BroxyOfficial/food-delivery-mvp.git
cd food-delivery-mvp
```

### Step 3: Install Dependencies
```bash
npm install
```
*(This downloads all the code libraries - takes 2-3 minutes)*

### Step 4: Start the Web App
```bash
npm run dev:web
```
👉 **Open your browser and go to:** http://localhost:3000

You should see a beautiful food delivery landing page! ✨

---

## 📚 What Each Command Does

| Command | What it does |
|---------|-------------|
| `npm install` | Downloads all dependencies |
| `npm run dev:web` | Starts the website (port 3000) |
| `npm run dev:api` | Starts the backend server (port 3001) |
| `npm run dev:mobile` | Starts the mobile app |
| `npm run build:web` | Creates production version of website |

---

## 🗄️ Database Setup (Optional - for full features)

If you want to use the database:

### Install PostgreSQL
1. Go to https://www.postgresql.org/download/
2. Download and install
3. Remember your password!

### Setup Database
```bash
# Update .env.local with your database credentials
DATABASE_URL=postgresql://user:your_password@localhost:5432/food_delivery

# Then run:
npm run db:generate
npm run db:push
npm run db:seed  # Add sample restaurants
```

---

## 🆘 Troubleshooting

### "npm: command not found"
→ Node.js not installed. Download from https://nodejs.org/

### Port 3000 already in use
→ Another app is using it. Close it or run: `npm run dev:web -- -p 3001`

### "message too large" error
→ Clear cache and try again:
```bash
rm -rf apps/web/.next
npm run build:web
```

### Still stuck?
→ Check errors in the terminal and share them!

---

## 📁 Project Structure
```
food-delivery-mvp/
├── apps/
│   ├── web/          ← Customer website
│   ├── api/          ← Backend server
│   └── mobile/       ← Mobile app
├── package.json      ← Main config
└── .env.local        ← Your secrets (database, API keys)
```

---

## 🚀 Next Steps After Running

1. **Explore the web app** at http://localhost:3000
2. **Open your code** in VS Code to see how it works
3. **Start the API**: `npm run dev:api` (in new terminal)
4. **Connect them together** (I can help with this!)

---

## ❓ Questions?
Just ask! I can help you:
- Add features
- Fix errors
- Connect the website to the API
- Deploy to the internet

**Let's build! 🎉**
