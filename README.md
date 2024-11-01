## Healthcare Management System - Web Dashboard

A web-based **Healthcare Management System** designed to help hospital administrators efficiently manage patient records, admissions, discharges, and more. This system offers an intuitive dashboard built with **HTML**, **CSS**, and **JavaScript** on the frontend, and a **Node.js** backend with **Firebase Firestore** for secure and scalable data management.

## Features

- **Patient Registration**: Register new patients with essential personal information.
- **New Patient Entry**: Admit patients to various wards (General, ICU, ICCU) and record their hospital details.
- **Search Patients**: Search for patients by UID (Aadhaar) to view records.
- **Discharge Patients**: Discharge patients upon treatment completion, with diagnostic information.

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Healthcare-Management-System-Web.git
   cd Healthcare-Management-System-Web

2. **Install Dependencies In the project’s root directory, run:**
   ```bash
      npm install

4. **Configure Firebase**

   Create a Firebase project and add your web app in Firebase Console.
   Set up Firestore and Firebase Authentication.
   Replace the Firebase config details in your project.
   Add Your Admin Sdk .Json File in server directory and Update Server.js/ln:7

4. **Run the Server**
   ```bash
      npm start

The server will start on http://localhost:5000.

**Usage**

Admin Login: Access the dashboard via login.
Register & Manage Patients: Register, New Entry, Search, and Discharge patients through the Admin Dashboard.

**Project Structure**
client/ - Contains HTML, CSS, and JavaScript files for the web dashboard UI.
server/ - Contains the backend code with Node.js and Express setup.
config/ - Firebase configuration and environment files.

Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

License
This project is licensed under the MIT License.
