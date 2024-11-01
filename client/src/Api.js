import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const login = (email, password) => api.post('/login', { email, password });
export const addUser = (fname, lname, uid, dob, number, gender) => api.post('/add-user', {fname, lname, uid, dob, number, gender});
export const addNewEntry = (uid, hospitalName, hospitalAddress, location, pType, admitIn) => api.post('/add-new-entry', {uid, hospitalName, hospitalAddress, location, pType, admitIn})
export const addDischarge = (uid, rId, diagnosed) => api.post('/add-discharge', {uid, rId, diagnosed})
export const getUserByUid = (uid) => api.get(`/user/${uid}`);
export const getUsers = () => api.get('/users');