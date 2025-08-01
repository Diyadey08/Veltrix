"use client"
import { AuthContext } from '@/context/AuthContext';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'


function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = useUser();
    useEffect(() => {
        user && createNewUser();
    }, [user]);

    
  const createNewUser = async () => {
    try {
      const result = await axios.post('/api/user');
      console.log("User created:", result.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  

    return (
        <div>
            {children}
        </div>
    )
}

// Custom hook to use auth
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export default Provider

