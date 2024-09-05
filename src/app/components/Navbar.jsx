import React from 'react'
import Link from 'next/link'
import { HiHome, HiPlus, HiClipboardList } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import InvoiceCustomers from './InvoiceCustomers'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 -my-8 h-[90px] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-white hover:text-gray-200 transition duration-300">
              <HiHome className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <h1 className="ml-4 text-white font-bold text-lg sm:text-xl">INNOMATRICS TECHNOLOGIES</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              <Link href="/InvoiceList" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                <HiClipboardList className="mr-2" />
                Invoice List
              </Link>
              <Link href="/downloadedClients" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                <HiClipboardList className="mr-2" />
                Invoice/PF Client status and List
              </Link>
              <Link href="/addInvoice" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                <HiPlus className="mr-2" />
                Add Invoice
              </Link>
              <div className="relative">
                <FaUserCircle className="text-white h-6 w-6 cursor-pointer hover:text-gray-200 transition duration-300" />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <InvoiceCustomers />
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button p-2 rounded-md inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden hidden mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/addInvoice" className="text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">
            Add Invoice
          </Link>
          <Link href="/InvoiceList" className="text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">
            Invoice List
          </Link>
          <div className="text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">
            <InvoiceCustomers />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar