import Link from 'next/link';
import React from 'react';
import InvoiceCustomers from './InvoiceCustomers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-zinc-800 px-8 py-3 w-full md:w-full">
      <Link className="text-white font-bold hover:scale-110 transition ease-in-out duration-300" href="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <h1 className="text-white font-semibold">INNOMATRICS TECHNOLOGIES</h1>
      <InvoiceCustomers />
      <Link className="bg-sky-300 text-white hover:transform hover:bg-red-400 transition-300 duration-300 ease-in-out p-4 rounded-md" href="/addInvoice">
        Add your Invoices
      </Link>
      <Link className="bg-sky-300 text-white hover:transform hover:bg-red-400 transition-300 duration-300 ease-in-out p-4 rounded-md" href="/InvoiceList">
        Invoice List
      </Link>
    </nav>
  );
};

export default Navbar;
