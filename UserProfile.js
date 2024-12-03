import React, { useState } from 'react';
import { Map } from 'immutable';

const UserProfile = () => {
  // Initial immutable state
  const [user, setUser] = useState(Map({
    name: 'Alice',
    age: 25
  }));

  // Function to update age
  const updateAge = () => {
    setUser(user.set('age', user.get('age') + 1));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.get('name')}</p>
      <p>Age: {user.get('age')}</p>
      <button onClick={updateAge}>Increment Age</button>
    </div>
  );
};

export default UserProfile;
