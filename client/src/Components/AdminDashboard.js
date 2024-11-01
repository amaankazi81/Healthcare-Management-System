import React, {useState, useEffect} from 'react'
import { addUser, addNewEntry, addDischarge, getUserByUid, getUsers } from '../Api';
import Navbar from './Navbar'
import '../CSS/admindash.css'

function AdminDashboard(){

    const [noDisplay, setNoDisplay] = useState(true)
    const [showRegister, setShowRegister] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [newEntry, setNewEntry] = useState(false)
    const [discharge, setDischarge] = useState(false)
    const [fname, setFname] = useState('')
    const [lname, setLname]  = useState('')
    const [uid, setUid] = useState('')
    const [dob, setDob] = useState('') 
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('Male')
    const [hospitalName, setHospitalName] = useState('') 
    const [hospitalAddress, setHospitalAddress] = useState('')
    const [location, setLocation] = useState('')
    const [pType, setPtype] = useState('Checkup') 
    const [admitIn, setAdmitIn] = useState('General Ward')
    const [rId, setRid] = useState('') 
    const [diagnosed, setDiagnosed] = useState('')
    const [users, setUsers] = useState([]);
    const [searchUid, setSearchUid] = useState('');  
    const [searchedUser, setSearchedUser] = useState(null);
    const [noUserFound, setNoUserFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    
    // Fetching Users
    useEffect(() => {
        async function fetchUsers() {
            const response = await getUsers();
            setUsers(response.data);
        }
        fetchUsers();
    }, []);

    // Calculate current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleRegisterClick = () => {
        setShowRegister(!showRegister);
        if (showSearch) setShowSearch(false);
        if (noDisplay) setNoDisplay(false)
        if (newEntry) setNewEntry (false)
        if (discharge) setDischarge(false)
    };
    
    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        if (showRegister) setShowRegister(false);
        if (noDisplay) setNoDisplay(false)
        if (newEntry) setNewEntry(false)
        if (discharge) setDischarge(false)
    };

    const handleNewEntryClick = () => {
        setNewEntry(!newEntry)
        if(showRegister) setShowRegister(false)
        if (showSearch) setShowSearch(false);
        if (noDisplay) setNoDisplay(false)
        if (discharge) setDischarge(false)
    }

    const handleDischargeClick =() => {
        setDischarge(!discharge)
        if(showRegister) setShowRegister(false)
        if (showSearch) setShowSearch(false);
        if (noDisplay) setNoDisplay(false)
        if (newEntry) setNewEntry(false)
    }


     //Adding User
     const handleAddUser = async (event) => {
        event.preventDefault();
        try{
            await addUser(fname, lname, uid, dob, number, gender)
            setFname('')
            setLname('')
            setUid('')
            setDob('')
            setNumber('')
            setGender('Male')
            alert('User Added Successfully')
        } catch(error) {
            console.log('Error Adding User', error)
        }
    }


    //New Entry
    const handleNewEntry = async (event) => {
        event.preventDefault()
        try{
            await addNewEntry(uid, hospitalName, hospitalAddress, location, pType, admitIn)
            setUid('')
            setHospitalName('')
            setHospitalAddress('')
            setLocation('')
            setPtype('Checkup')
            setAdmitIn('General Ward')
            alert('New Entry Done Successfully');
        } catch(error) {
            console.log('Error Adding User', error)
        }
    }


    //Discharge
     const handleDischarge = async (event) => {
        event.preventDefault()
        try{
            await addDischarge(uid, rId, diagnosed)
            setUid('')
            setRid('')
            setDiagnosed('')
            alert('User Discharged Successfully')
        } catch(error) {
            console.log('Error while Discharging', error)
        }
    }


     //Serching Users based on Uid
     const handleSearchUser = async () => {
        if (!searchUid) {
            alert("Please enter a UID to search.");
            return;
        }
        try {
            const response = await getUserByUid(searchUid);
            if (response.data) {
                setSearchedUser(response.data);  
                setNoUserFound(false);  
            } else {
                setSearchedUser(null);
                setNoUserFound(true);  
            }
        } catch (error) {
            console.error('Error searching member:', error);
            setSearchedUser(null);
            setNoUserFound(true);  
        }
    }; 


    return(
        <>
        <Navbar/>
       <div className="admin">
       <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <button onClick={handleRegisterClick}>Register</button>
            <button onClick={handleNewEntryClick}>New Entry</button>
            <button  onClick={handleSearchClick}>Search</button>
            <button onClick={handleDischargeClick}>Discharge</button>

        </div>
        <div className="content">

        {noDisplay && (
            <div className='nodisplay'><h2>Welcome Admin!!</h2>
            <h4>Register a User, Entery a New Pateint, Search a User or Discharge.</h4>
            </div>
        )}
       
        {showRegister && (
                        <div className="register-form">
                            
                            <h2>Register New Member</h2>
                            <form>
                            <input type="text" placeholder="First Name" value={fname} onChange={(e)=>setFname(e.target.value)} />
            
                            <input type="text" placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} /> 
                                
                            <input type="number" placeholder="Aadhar UID"  value={uid} onChange={(e)=>setUid(e.target.value)}/>
                                
                            <input type="" placeholder='DOB'value={dob} onChange={(e)=>setDob(e.target.value)}/>
                                
                            <input type="number" placeholder="Phone Number" value={number} onChange={(e)=>setNumber(e.target.value)}/>                                
                                
                            <label>Gender : </label>
                                    <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                
                                <button type="submit" onClick={handleAddUser} >Register</button>
                            </form>
                        </div>
                    )}

        {newEntry && (
            <div className="newentry">
                
                <h2>New Patient Entry</h2>
                <form>
                <input type="text" placeholder='Aadhar UID' value={uid} onChange={(e)=>setUid(e.target.value)} />

                <input type="text" placeholder='Hospital Name' value={hospitalName} onChange={(e)=>setHospitalName(e.target.value)} />

                <input type="text" placeholder='Hospital Address' value={hospitalAddress} onChange={(e)=>setHospitalAddress(e.target.value)} />

                <input type="text" placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
                <br />
                <label id='pt'>Pateint Type : </label>
                <select value={pType} onChange={(e)=>setPtype(e.target.value)}>
                    <option value="Checkup">Checkup</option>
                    <option value="Admitted">Admitted</option>
                </select>

                <label id='ad' >Admitted In : </label>
                <select value={admitIn} onChange={(e)=>setAdmitIn(e.target.value)} >
                    <option value="General Ward">General Ward</option>
                    <option value="ICU">ICU</option>
                    <option value="ICCU">ICCU</option>
                </select>

                 <button type="submit" onClick={handleNewEntry}>Submit</button>
                </form>

            </div>
        )}

                {showSearch && (
                        <div className="search-form">
                            <h2>Search Member</h2>
                                <div className='search'>
                                    <input type="text" placeholder="Search by Aadhar UID..." value={searchUid} onChange={(e)=>setSearchUid(e.target.value)}/>
                                    <button onClick={handleSearchUser}>Search</button>
                                </div>
                                <div className="serchedUser">
                                {searchedUser && (
                <div>
                    <h3>Search Result:</h3> 
                    <h4>Name: {searchedUser.fname} {searchedUser.lname}</h4>
                    <h4>Gender: {searchedUser.gender}</h4>
                    <h4>Contact: {searchedUser.number}</h4>
                    <h4>DOB: {searchedUser.dob}</h4>
                    <h4>UID: {searchedUser.uid}</h4>
                </div>
            )}

            <br />

                {noUserFound && (
                        <div>
                            <h3>No User found with the UID "{searchUid}"</h3>
                        </div>
                    )}
                    </div>

                     <div className="search-list">
                        <ol type='1'>
                        {currentUsers.map((user) => (
                    <li key={user.id}> <h4>Name: {user.fname} {user.lname}</h4> <h4>UID: {user.uid}</h4> <h4>Gender: {user.gender}</h4> <h4>Contact: {user.number}</h4>   
                    </li>
                ))}</ol>

                     <div className="pagination">
                                {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => paginate(index + 1)}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                    </div>
                            
                        </div>
                    )}

                {discharge && (
                    <div className="discharge">
                        <h2>Discharge</h2>
                        <form >
                            <input type="number" placeholder='Aadhar UID' value={uid} onChange={(e)=>setUid(e.target.value)} />

                            <input type="text" placeholder='Record ID' value={rId} onChange={(e)=>setRid(e.target.value)} />
                            <br />
                            <label >Diagonsed : </label> <br />
                            <textarea value={diagnosed} onChange={(e)=>setDiagnosed(e.target.value)} ></textarea>
                            <br />
                            <button type="submit" onClick={handleDischarge}>Discharge</button>
                        </form>
                    </div>
                )}
                    
        </div>
       </div>
        </>
    )
}

export default AdminDashboard