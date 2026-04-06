# 💰 Finance Dash - Interactive Dashboard

Welcome to **Finance Flow**, a modern and intuitive dashboard designed to help users track their financial health effortlessly. This project was built with a focus on **clean UI, modular code, and real-time responsiveness.**

---

## 🌟 What's Inside?

I’ve built this dashboard to go beyond just displaying numbers. It’s about providing a clear story of your money.

### 1. **Financial Overview**

- **Smart Summary:** Instantly see your Total Balance, Income, and Expenses.
- **Data Visualization:** A smooth, time-based Line Chart for balance trends and a Pie Chart for categorical spending.

### 2. **Transaction Management**

- **Live Search & Filter:** Quickly find any transaction by searching for descriptions or filtering by type (Income/Expense).
- **Seamless Interaction:** Add new transactions via a modern, animated modal that provides instant toast notifications.

### 3. **Smart Insights (The "Aha!" Moment)**

- **Automated Analysis:** The system identifies your highest spending category automatically.
- **Saving Tips:** Includes logic-driven observations to help users save more.

### 4. **Role-Based Experience (RBAC Simulation)**

- **Switch Roles:** Easily toggle between **Admin** and **Viewer** mode.
- **Dynamic UI:** Admins have full control to add transactions, while Viewers have a "read-only" clean experience.

---

## 🛠️ My Approach & Technical Choices

When I started this project, I had three goals: **Simplicity, Scalability, and Speed.**

- **Next.js 15 & TypeScript:** I chose the latest Next.js for its robust routing and TypeScript to ensure my code is bug-free and easy to maintain.
- **State Management:** I used the **React Context API**. Since the dashboard is self-contained, Context provided a lightweight yet powerful way to sync data between the charts, table, and role-switcher.
- **Theming (Dark Mode):** I implemented a custom theme provider using CSS variables. This ensures the UI feels premium and reduces eye strain at night.
- **Performance:** I used `useMemo` for heavy data filtering and handled React render cycles carefully to ensure the app stays snappy even as data grows.

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### 2. Installation

```bash
npm install
```
