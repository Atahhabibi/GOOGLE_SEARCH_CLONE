
import { Navigate } from 'react-router-dom'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({children}) => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
      }

    if(!user){
        return<Navigate to='/login' />
    }

  return <>{children}</>
}

export default ProtectedRoute
