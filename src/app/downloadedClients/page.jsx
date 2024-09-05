

import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import { HiDocumentDownload, HiClipboardList } from 'react-icons/hi'

export const dynamic = 'force-dynamic'

const getInvoices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch invoices")
    }
    return res.json()
  } catch (error) {
    console.log("Error loading invoices", error)
  }
}

const ShowDownloadedInv = async () => {
  const { invoices } = await getInvoices()

  const calculateTotal = (key) => invoices.reduce((total, invoice) => total + (invoice[key] || 0), 0)

  const totalInvCount = calculateTotal('invCount')
  const totalPfCount = calculateTotal('pfCount')

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <StatCard title="Total Invoices Generated" count={totalInvCount} icon={<HiDocumentDownload className="w-8 h-8" />} />
          <StatCard title="Total PFs Generated" count={totalPfCount} icon={<HiClipboardList className="w-8 h-8" />} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ClientList title="Clients with Invoices" invoices={invoices} countKey="invCount" bgColor="bg-blue-500" />
          <ClientList title="Clients with PFs" invoices={invoices} countKey="pfCount" bgColor="bg-gradient-to-r from-green-500 to-indigo-600" />
        </div>

        <h2 className="text-2xl font-bold mb-6">Invoice/PF Status of Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {invoices.map((invoice, index) => (
            <ClientCard key={index} invoice={invoice} />
          ))}
        </div>
      </main>
    </div>
  )
}

const StatCard = ({ title, count, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="mr-4 text-blue-500">{icon}</div>
    <div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-3xl font-bold text-blue-600">{count}</p>
    </div>
  </div>
)

const ClientList = ({ title, invoices, countKey, bgColor }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {invoices
        .filter(invoice => invoice[countKey] && invoice[countKey] > 0)
        .map((invoice) => (
          <Link key={invoice._id} href={`/getOneInvoice/${invoice._id}`}>
            <div className={`${bgColor} text-white p-4 rounded-lg shadow-md hover:opacity-80 transition duration-300 ease-in-out`}>
              <h3 className="text-lg font-semibold">{invoice.client}</h3>
            </div>
          </Link>
        ))}
    </div>
  </div>
)

const ClientCard = ({ invoice }) => (
  <div className="bg-white rounded-none shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out">
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
      <h3 className="text-xl font-bold mb-2">{invoice.client}</h3>
    </div>
    <div className="p-4">
      <StatusItem label="Invoice" count={invoice.invCount} />
      <StatusItem label="PF" count={invoice.pfCount} />
    </div>
  </div>
)

const StatusItem = ({ label, count }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="font-semibold">{label} Status:</span>
    <span className={`px-2 py-1 rounded ${count > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      {count > 0 ? 'Downloaded' : 'Not Downloaded'}
    </span>
  </div>
)

export default ShowDownloadedInv