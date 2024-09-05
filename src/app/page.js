'use client';

import { useState, useEffect } from 'react';
import InvoiceList from './components/InvoiceList';
import Login from './components/Login';
import Layout from './components/Layout'; // Import Layout
import AddInvoice from './addInvoice/page';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authentication in localStorage
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store in localStorage
  };

  return (
    <div>
      {isAuthenticated ? (
        <Layout>
          {/* Any other components, like InvoiceList */}
          <InvoiceList />
          
          {/* Render other components here */}
        </Layout>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
