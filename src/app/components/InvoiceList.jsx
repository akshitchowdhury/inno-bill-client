"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import RemoveBtn from "./RemoveBtn"
import { HiOutlineDocumentText, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

const getInvoices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" })
    if (!res.ok) throw new Error("Failed to fetch invoices")
    const invoiceFlow = await res.json()
    return invoiceFlow.invoices
  } catch (error) {
    console.error("Error loading invoices", error)
    throw error
  }
}

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedInvoices = await getInvoices()
        setInvoices(fetchedInvoices)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <h2 className="text-2xl font-bold mb-2">Error</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Invoice List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {invoices.map((invoice) => (
          <div key={invoice._id} className="bg-white rounded-none 
          shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
            <Link href={`/getOneInvoice/${invoice._id}`}>
              <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white h-[140px]">
                <h2 className="font-bold text-xl mb-2">{invoice.client}</h2>
                <p className="text-sm opacity-75">{invoice.project}</p>
              </div>
            </Link>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold">Services:</span> {invoice.services}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Address:</span> {invoice.address}, {invoice.city}, {invoice.state} - {invoice.pin}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <p>Invoice downloads: {invoice.invCount}</p>
                <p>PF downloads: {invoice.pfCount}</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 bg-gray-50">
              <RemoveBtn id={invoice._id} />
              <Link href={`/editInvoice/${invoice._id}`}>
                <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 py-2 px-4 rounded-lg flex items-center">
                  <HiOutlinePencil className="mr-2" />
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvoiceList