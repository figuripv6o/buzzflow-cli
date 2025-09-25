const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req# 1. Go to base Buzz repo
cd ~/Buzzanator_FDF
rm -rf buzzflow-cli
mkdir -p buzzflow-cli
cd buzzflow-cli

# 2. ------------------------
# Backend setup
# ------------------------
mkdir backend
cd backend
npm init -y
npm install express cors jsonwebtoken dotenv

# Backend server.js
cat > server.js <<'EOF'
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: "ok", service: "BuzzFlow Backend" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ BuzzFlow Backend running at http://localhost:${PORT}`);
});
