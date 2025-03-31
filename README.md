
# 🌩️ Cloud Cost Optimizer

A cloud-agnostic monitoring and alerting system to proactively detect, analyze, and notify teams about unexpected cost anomalies across AWS, GCP, or Azure — built as a part of the **Atlan Platform Engineering Internship Challenge 2025**.

---

## 🚀 Features

- 📊 **Billing Collector** – Ingests cost data via API or mock source
- 📉 **Anomaly Detection Engine** – Detects spikes via rule-based or statistical thresholds
- 📬 **Multi-channel Alerts** – Dispatch via Slack, Email, Webhook
- 📈 **Trend Analyzer** – Understand weekly/monthly trends
- 🌐 **REST API** – Lightweight Express.js API for integration
- 🧠 **Slack Bot** – Sends formatted cost alerts directly to teams
- 🛢️ **MongoDB / Local JSON** – For cost and alert persistence

---

## 📂 Project Structure

```
cloud-cost-optimizer/
├── src/
│   ├── collectors/         # Billing ingestion logic
│   ├── detectors/          # Cost anomaly engine
│   ├── alerts/             # Alert system + Slack bot
│   ├── analytics/          # Trend analytics
│   ├── dashboard/          # Dashboard data generator
│   ├── services/           # MongoDB + Storage logic
│   ├── routes/             # API endpoints
│   ├── utils/              # Cloud clients (placeholder)
│   └── index.js            # Main server entrypoint
├── config/                 # Threshold config
├── .env.example            # Sample environment file
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/cloud-cost-optimizer.git
cd cloud-cost-optimizer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017
SLACK_WEBHOOK=https://hooks.slack.com/services/your/webhook/url
```

### 4. Run the Server

```bash
node src/index.js
```

---

## 🔗 API Endpoints

| Method | Endpoint      | Description                      |
|--------|---------------|----------------------------------|
| GET    | `/costs`      | Get recent cost breakdown        |
| GET    | `/alerts`     | Detect and return active alerts  |
| GET    | `/trends`     | Analyze trends across services   |

---

## 🧪 Example Output

```json
{
  "alerts": [
    {
      "service": "EC2",
      "cost": 120,
      "severity": "warning",
      "message": "Anomaly detected in EC2"
    }
  ]
}
```

---

## 👨‍💻 Author

**Rohith**  
GitHub: [@Rohith1968](https://github.com/Rohith1968)

---

_This project was developed as part of the Atlan Internship Challenge 2025 to demonstrate cloud architecture, engineering trade-offs, and system thinking._
