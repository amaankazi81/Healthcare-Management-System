## Healthcare Management System - Web Dashboard

A web-based **Healthcare Management System** designed to help hospital administrators efficiently manage patient records, admissions, discharges, and more. This system offers an intuitive dashboard built with **HTML**, **CSS**, and **JavaScript** on the frontend, and a **Node.js** backend with **Firebase Firestore** for secure and scalable data management.

## Features

- **Patient Registration**: Register new patients with essential personal information.
- **New Patient Entry**: Admit patients to various wards (General, ICU, ICCU) and record their hospital details.
- **Search Patients**: Search for patients by UID (Aadhaar) to view records.
- **Discharge Patients**: Discharge patients upon treatment completion, with diagnostic information.

## Project Workflow: 

**Admin Login:** Access the Admin dashboard via login.

![h1](https://github.com/user-attachments/assets/c3225134-e552-48e5-928c-b619b1a3e12e)


**Register:** Registering a Patient by personal information.

![h2](https://github.com/user-attachments/assets/51548edd-6c5d-4f7f-9951-17bf5c8d50a6)

![h3](https://github.com/user-attachments/assets/643a4da2-1807-4cb6-bef7-793355d71bb8)


**New Entry:** Entry a patient by giving UID, Hospital name and address, Patient Type and Type of Ward.

![h4](https://github.com/user-attachments/assets/65d660ee-03c9-498e-849b-595b23c4e43b)


**Search:** Search a Pateint by UID and Can View All Patient.

![h5](https://github.com/user-attachments/assets/4c954206-d223-4b0e-9e36-62c00a8cab72)


**Discharge:** Dicharge a Patient by giving a note.

![h6](https://github.com/user-attachments/assets/88cb7cf4-953a-4df7-a8ae-2171dfc22644)


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

**Project Structure**
client/ - Contains React, HTML, CSS, and JavaScript files for the web dashboard UI.

server/ - Contains the backend code with Node.js and Express setup.

config/ - Firebase configuration and environment files.

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

**License**

This project is licensed under the MIT License.
