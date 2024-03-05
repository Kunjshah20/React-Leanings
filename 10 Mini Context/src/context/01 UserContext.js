import React from "react";

const UserContext = React.createContext();

export default UserContext;

// Notes
// 1. Context comes with ContextProvider for which file is created down
// 2. It acts as a wrapper
// 3. E.g :
{/* 
<UserContext>
  <Login />
  <Card>
    <Data />                 // so data can be passed directly to Data without prop drilling 
  </Card>
</UserContext>; */}
