// app/page.js
'use client';

import { useState } from 'react';

import InvoiceList from './components/InvoiceList';
import Login from './components/Login';
import Navbar from './components/Navbar';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <>
        
    <div className="container max-w-7xl p-4 mx-auto">

<Navbar/>

<InvoiceList />
</div>
        </>
      ) : (
        <Login onLogin={setIsAuthenticated} />
      )}
    </div>
  );
}
