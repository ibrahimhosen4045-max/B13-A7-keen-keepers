# 👥 KeenKeeper — Keep Your Friendships Alive

## 📌 Project Overview

**KeenKeeper** is a modern and responsive web application designed to help users maintain meaningful relationships by tracking interactions with friends. It allows users to monitor contact frequency, log interactions (Call, Text, Video), and visualize communication patterns.

---

## 🚀 Live Project

* 🔗 Live Site: *(https://b13-a7-keen-keepers.vercel.app)*
* 💻 GitHub Repo: *(https://github.com/ibrahimhosen4045-max/B13-A7-keen-keepers.git)*

---

## 🛠️ Technologies Used

* **React.js** — Frontend UI development
* **React Router DOM** — Client-side routing
* **Tailwind CSS** — Styling and responsive design
* **Recharts** — Data visualization (Pie Chart)
* **React Icons** — Icons for UI
* **React Toastify** — Toast notifications
* **Vercel** — Deployment

---

## ✨ Key Features

### 🔹 1. Responsive Design

* Fully responsive across **mobile, tablet, and desktop**
* Clean and modern UI based on Figma design

### 🔹 2. Friend Management System

* Displays **6–10 realistic friend profiles**
* Each friend includes:

  * Profile image
  * Name, email, bio
  * Tags
  * Contact status (overdue / almost due / on-track)

### 🔹 3. Interactive Friend Details Page

* Two-column layout:

  * **Left:** Profile details + action buttons (Snooze, Archive, Delete)
  * **Right:** Stats + Goal + Quick Check-In
* Quick actions:

  * 📞 Call
  * 💬 Text
  * 🎥 Video

### 🔹 4. Timeline Tracking System

* Automatically logs interactions when user clicks:

  * Call / Text / Video
* Each entry includes:

  * Date
  * Interaction type (icon)
  * Title (e.g., "Call with Alex")

### 🔹 5. Toast Notifications

* Shows real-time feedback when:

  * Call, Text, or Video button is clicked

### 🔹 6. Timeline Filtering (Challenge Feature)

* Filter interactions by:

  * Call
  * Text
  * Video

### 🔹 7. Friendship Analytics (Challenge Feature)

* Pie chart visualization of:

  * Call vs Text vs Video interactions

### 🔹 8. Loading State

* Shows loading animation while fetching friend data

### 🔹 9. 404 Page

* Custom error page for invalid routes

### 🔹 10. SPA Routing Fix

* Configured for deployment so that **page reload does not break routing**

---

## 📂 Project Structure (Simplified)

```
src/
 ├── components/
 ├── pages/
 │    ├── Home.jsx
 │    ├── Timeline.jsx
 │    ├── Stats.jsx
 │    ├── FriendDetails.jsx
 │    └── NotFound.jsx
 ├── hooks/
 ├── data/
 │    └── friends.json
 └── App.jsx
```

---

## ⚙️ Functionality Implemented

* ✅ Dynamic routing using React Router
* ✅ JSON-based friend data system
* ✅ State management for timeline tracking
* ✅ Conditional UI rendering based on status
* ✅ Event handling for interaction logging
* ✅ Chart data processing for analytics
* ✅ Filter logic for timeline

---

## 📊 Future Improvements (Optional)

* 🔍 Search functionality for friends/timeline
* 🔽 Sort timeline by newest/oldest
* 💾 LocalStorage or database integration
* 🔐 Authentication system

---

## 📅 Submission Info

* ✔ Completed all required features
* ✔ Implemented challenge features
* ✔ Deployed successfully without errors

---

## 👨‍💻 Author

**Ibrahim Hosen**
Frontend Developer (React Learner)

---

## 📜 License

This project is for educational purposes only.
