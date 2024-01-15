// User-List
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    //  List of  users
    <div className='user'>
      <h1 className='bg-black'>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li type='circle' key={user.id} style={{margin:'.5rem'}}>
           <p><strong>{user.name}</strong> - {user.email}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
