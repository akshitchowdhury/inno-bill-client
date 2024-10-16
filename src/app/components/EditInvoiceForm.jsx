'use client'

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "./Navbar"

export default function EditInvoiceForm({
  id,
  client,
  project,
  address,
  services,
  state,
  city,
  pin,
  gst,
  cgst,
  sgst,
  igst,
  balance,
  qty,
  pfNo,
  invNo,
  date,
  price
}) {
  const [formData, setFormData] = useState({
    newClient: client,
    newProject: project,
    newServices: services,
    newAddress: address,
    newState: state,
    newCity: city,
    newPin: pin,
    newGst: gst,
    newCgst: cgst,
    newSgst: sgst,
    newIgst: igst,
    newBalance: balance,
    newQty: qty,
    newPfNo: pfNo,
    newInvNo: invNo,
    newDate: date,
    newPrice: price
  })

  const router = useRouter()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to update invoice")
      }

      router.push("/")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Navbar />
    <div className="my-20"></div>
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="text-sm font-medium text-gray-700 mb-1">
                {key.replace('new', '').replace(/([A-Z])/g, ' $1').trim()}
              </label>
              {key === 'newServices' ? (
                <textarea
                  id={key}
                  value={value}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder={key.replace('new', '').replace(/([A-Z])/g, ' $1').trim()}
                  rows={4} // Adjust rows as necessary
                />
              ) : (
                <input
                  id={key}
                  type={key.includes('Date') ? 'date' : key.includes('Price') || key.includes('Qty') || key.includes('gst') || key.includes('Cgst') || key.includes('Sgst') || key.includes('Igst') || key.includes('Balance') ? 'number' : 'text'}
                  value={value}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder={key.replace('new', '').replace(/([A-Z])/g, ' $1').trim()}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Invoice
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
