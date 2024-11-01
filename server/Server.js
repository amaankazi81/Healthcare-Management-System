const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

//Initialize Firebase Admin SDK (backend Firebase services)
const serviceAccount = require('./healthcare-management-sy-3e4aa-firebase-adminsdk-4iai4-218f69f1e4.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://healthcare-management-sy-3e4aa-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
const auth = admin.auth();
const app = express();
app.use(cors())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

// Login 
app.post('/api/login', async (req, res) => {
    const { idToken } = req.body;
    console.log("Received token:", idToken); 
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const uid = decodedToken.uid;
        res.status(200).send({ message: 'Login successful', uid });
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).send({ error: 'Invalid token' });
    }
});


//Adding User
app.post('/api/add-user', async (req, res) => {
    const {fname, lname, uid, dob, number, gender} = req.body;
    try {
        const docRef = await db.collection('users').add({
            fname, 
            lname, 
            uid, 
            dob, 
            number, 
            gender
        });
        res.status(200).send({ success: `User added with ID: ${docRef.id}` });
    } catch (error) {
        res.status(500).send({ error: 'Error adding User' });
    }
});


//Adding New Entry
app.post('/api/add-new-entry', async (req, res) => {
    const {uid, hospitalName, hospitalAddress, location, pType, admitIn} = req.body;
    try {
        const docRef = await db.collection('newEntry').add({
            uid,
            hospitalName, 
            hospitalAddress, 
            location, 
            pType, 
            admitIn
        });
        res.status(200).send({ success: `User added with ID: ${docRef.id}` });
    } catch (error) {
        res.status(500).send({ error: 'Error adding User' });
    }
});


//Adding Discharge
app.post('/api/add-discharge', async (req, res) => {
    const {uid, rId, diagnosed} = req.body;
    try {
        const docRef = await db.collection('discharge').add({
            uid, 
            rId, 
            diagnosed
        });
        res.status(200).send({ success: `User Discharged with ID: ${docRef.id}` });
    } catch (error) {
        res.status(500).send({ error: 'Error While Discharging' });
    }
});


//Get User by Uid
app.get('/api/user/:uid', async (req, res) => {
    console.log('Requested UID:', req.params.uid);
    const { uid } = req.params;
    try {
        const snapshot = await db.collection('users').where('uid', '==', uid).get();
        if (snapshot.empty) {
            return res.status(404).send({ error: 'No User found with this Uid' });
        }
        const users = [];
        snapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
        res.status(200).send(users[0]); 
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


//View Users
app.get('/api/users', async (req, res) => {
    try {
        const users = [];
        const snapshot = await db.collection('users').get();
        snapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
        res.status(200).send(users);
    } catch (error) {
        console.log("Error fetching users: ",error)
        res.status(500).send({ error: 'Error retrieving users',error });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));