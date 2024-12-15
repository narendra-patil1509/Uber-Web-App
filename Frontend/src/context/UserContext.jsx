import React, {createContext, useState} from 'react';

export const UserDataContext = createContext();

const UserContext = ({chilldren}) => {
  
  const [user, setUser] = useState({
    email:'',
    fullName:{
      firstName:'',
      lastName:''
    }
  }) 

  return (
    <UserDataContext.Provider value={{user, setUser}}>
      {chilldren}
    </UserDataContext.Provider>
  )
}

export default UserContext