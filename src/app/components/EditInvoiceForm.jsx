

// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function EditInvoiceForm({id,       client,
// //   project,
// //   address,
// //   services,
// //   state,
// //   city,
// //   pin ,
// //   gst ,
// //   cgst,
// //   sgst,
// //   balance,
// //   qty,
// //   pfNo,
// //   invNo,
// //   date,
// //   price}) {
// //   const [newClient, setNewClient] = useState(client);
// //   const [newProject, setNewProject] = useState(project);
// //   const [newServices, setNewServices] = useState(services);
// //   const [newAdress, setNewAdress] = useState(address);
// //   const [newCity, setNewCity] = useState(city);
// //   const [newState, setNewState] = useState(state);
// //   const [newgst, setNewGst] = useState(gst);
// //   const [newPin, setNewpin] = useState(pin);
// //   const [newCgst, setnewCgst] = useState(pin);
// //   const [newSgst, setnewSgst] = useState(pin);
// //   const [newBalance, setnewBalance] = useState(pin);
// //   const [newQty, setnewQty] = useState(pin);
// //   const [newPfNo, setnewPfNo] = useState(pin);
// //   const [newInvNo, setNewInvNo] = useState(pin);
// //   const [newDate, setnewDate] = useState(pin);
// //   const [newPrice, setNewPrice] = useState(price);

// //   const router = useRouter();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     try {
// //       const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           newClient,
// //           newProject,
// //           newServices,
// //           newAdress,
// //           newState,
// //           newCity,
// //           newPin,
// //           newgst,
// //           newPrice,
// //           newCgst,
// //           newSgst,
// //           newBalance,
// //           newQty,
// //           newPfNo,
// //           newInvNo,
// //           newDate
// //         }),
// //       });
  
// //       if (!res.ok) {
// //         throw new Error("Failed to update invoice");
// //       }
  
// //       router.push("/");
      
// //       router.refresh();
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
  

// //   return (
// //     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
// //   {/* Client Title */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Client Title</label>
// //     <input
// //       id="clientTitle"
// //       onChange={(e) => setNewClient(e.target.value)}
// //       value={newClient}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="Client Title"
// //     />
// //   </div>

// //   {/* Project Name */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="projectName" className="block text-lg font-bold mb-1">Project Name</label>
// //     <input
// //       id="projectName"
// //       onChange={(e) => setNewProject(e.target.value)}
// //       value={newProject}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="Project Name"
// //     />
// //   </div>

// //   {/* Service Type */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="serviceType" className="block text-lg font-bold mb-1">Service Type</label>
// //     <input
// //       id="serviceType"
// //       onChange={(e) => setNewServices(e.target.value)}
// //       value={newServices}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="Services/Category"
// //     />
// //   </div>

// //   {/* Address */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="address" className="block text-lg font-bold mb-1">Address</label>
// //     <input
// //       id="address"
// //       onChange={(e) => setNewAdress(e.target.value)}
// //       value={newAdress}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="Address"
// //     />
// //   </div>

// //   {/* State */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="state" className="block text-lg font-bold mb-1">State</label>
// //     <input
// //       id="state"
// //       onChange={(e) => setNewState(e.target.value)}
// //       value={newState}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="State"
// //     />
// //   </div>

// //   {/* City */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="city" className="block text-lg font-bold mb-1">City</label>
// //     <input
// //       id="city"
// //       onChange={(e) => setNewCity(e.target.value)}
// //       value={newCity}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="City"
// //     />
// //   </div>

// //   {/* Area PIN Code */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="pin" className="block text-lg font-bold mb-1">Area PIN Code</label>
// //     <input
// //       id="pin"
// //       onChange={(e) => setNewpin(e.target.value)}
// //       value={newPin}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="text"
// //       placeholder="PIN"
// //     />
// //   </div>

// //   {/* GST no */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="gst" className="block text-lg font-bold mb-1">GST no</label>
// //     <input
// //       id="gst"
// //       onChange={(e) => setNewGst(e.target.value)}
// //       value={newgst}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="number"
// //       placeholder="GST no"
// //     />
// //   </div>

// //   {/* Price of Project */}
// //   <div className="col-span-1 sm:col-span-1">
// //     <label htmlFor="price" className="block text-lg font-bold mb-1">Price of Project</label>
// //     <input
// //       id="price"
// //       onChange={(e) => setNewPrice(e.target.value)}
// //       value={newPrice}
// //       className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
// //       type="number"
// //       placeholder="Price of Project"
// //     />
// //   </div>

// //   {/* Submit Button */}
// //   <div className="col-span-3 sm:col-span-3">
// //     <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-6 rounded-full w-1/6 transition duration-300 ease-in-out">
// //       Update Topic
// //     </button>
// //   </div>
// // </form>

  
// //   );
// // }

// "use client"
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "./Navbar";

// export default function EditInvoiceForm({id, client, project, address, services, state, city, pin, gst, cgst, sgst,igst, balance, qty, pfNo, invNo, date, price}) {
//   const [newClient, setNewClient] = useState(client);
//   const [newProject, setNewProject] = useState(project);
//   const [newServices, setNewServices] = useState(services);
//   const [newAddress, setNewAddress] = useState(address);
//   const [newCity, setNewCity] = useState(city);
//   const [newState, setNewState] = useState(state);
//   const [newPin, setNewPin] = useState(pin);
//   const [newGst, setNewGst] = useState(gst);
//   const [newCgst, setNewCgst] = useState(cgst);
//   const [newSgst, setNewSgst] = useState(sgst);
//   const [newIgst, setNewIgst] = useState(igst);
//   const [newBalance, setNewBalance] = useState(balance);
//   const [newQty, setNewQty] = useState(qty);
//   const [newPfNo, setNewPfNo] = useState(pfNo);
//   const [newInvNo, setNewInvNo] = useState(invNo);
//   const [newDate, setNewDate] = useState(date);
//   const [newPrice, setNewPrice] = useState(price);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           newClient,
//           newProject,
//           newServices,
//           newAddress,
//           newState,
//           newCity,
//           newPin,
//           newGst,
//           newCgst,
//           newSgst,
//           newIgst,
//           newBalance,
//           newQty,
//           newPfNo,
//           newInvNo,
//           newDate,
//           newPrice
//         }),
//       });
  
//       if (!res.ok) {
//         throw new Error("Failed to update invoice");
//       }
  
//       router.push("/");
      
//       router.refresh();
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   return (
//     <>
//     <Navbar/>
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
//       {/* Client Title */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Client Title</label>
//         <input
//           id="clientTitle"
//           onChange={(e) => setNewClient(e.target.value)}
//           value={newClient}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="Client Title"
//         />
//       </div>

//       {/* Project Name */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="projectName" className="block text-lg font-bold mb-1">Project Name</label>
//         <input
//           id="projectName"
//           onChange={(e) => setNewProject(e.target.value)}
//           value={newProject}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="Project Name"
//         />
//       </div>

//       {/* Service Type */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="serviceType" className="block text-lg font-bold mb-1">Service Type</label>
//         <input
//           id="serviceType"
//           onChange={(e) => setNewServices(e.target.value)}
//           value={newServices}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="Services/Category"
//         />
//       </div>

//       {/* Address */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="address" className="block text-lg font-bold mb-1">Address</label>
//         <input
//           id="address"
//           onChange={(e) => setNewAddress(e.target.value)}
//           value={newAddress}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="Address"
//         />
//       </div>

//       {/* State */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="state" className="block text-lg font-bold mb-1">State</label>
//         <input
//           id="state"
//           onChange={(e) => setNewState(e.target.value)}
//           value={newState}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="State"
//         />
//       </div>

//       {/* City */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="city" className="block text-lg font-bold mb-1">City</label>
//         <input
//           id="city"
//           onChange={(e) => setNewCity(e.target.value)}
//           value={newCity}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="City"
//         />
//       </div>

//       {/* Area PIN Code */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="pin" className="block text-lg font-bold mb-1">Area PIN Code</label>
//         <input
//           id="pin"
//           onChange={(e) => setNewPin(e.target.value)}
//           value={newPin}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="PIN"
//         />
//       </div>

//       {/* GST no */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="gst" className="block text-lg font-bold mb-1">GST no</label>
//         <input
//           id="gst"
//           onChange={(e) => setNewGst(e.target.value)}
//           value={newGst}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="GST no"
//         />
//       </div>

//       {/* CGST */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="cgst" className="block text-lg font-bold mb-1">CGST</label>
//         <input
//           id="cgst"
//           onChange={(e) => setNewCgst(e.target.value)}
//           value={newCgst}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="number"
//           placeholder="CGST"
//         />
//       </div>

//       {/* SGST */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="sgst" className="block text-lg font-bold mb-1">SGST</label>
//         <input
//           id="sgst"
//           onChange={(e) => setNewSgst(e.target.value)}
//           value={newSgst}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="number"
//           placeholder="SGST"
//         />
//       </div>
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="igst" className="block text-lg font-bold mb-1">IGST</label>
//         <input
//           id="igst"
//           onChange={(e) => setNewIgst(e.target.value)}
//           value={newIgst}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="number"
//           placeholder="IGST"
//         />
//       </div>

//       {/* Balance */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="balance" className="block text-lg font-bold mb-1">Balance</label>
//         <input
//           id="balance"
//           onChange={(e) => setNewBalance(e.target.value)}
//           value={newBalance}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="number"
//           placeholder="Balance"
//         />
//       </div>

//       {/* Quantity */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="qty" className="block text-lg font-bold mb-1">Quantity</label>
//         <input
//           id="qty"
//           onChange={(e) => setNewQty(e.target.value)}
//           value={newQty}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="number"
//           placeholder="Quantity"
//         />
//       </div>

//       {/* PF No */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="pfNo" className="block text-lg font-bold mb-1">PF No</label>
//         <input
//           id="pfNo"
//           onChange={(e) => setNewPfNo(e.target.value)}
//           value={newPfNo}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="PF No"
//         />
//       </div>

//       {/* Invoice No */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="invNo" className="block text-lg font-bold mb-1">Invoice No</label>
//         <input
//           id="invNo"
//           onChange={(e) => setNewInvNo(e.target.value)}
//           value={newInvNo}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="text"
//           placeholder="Invoice No"
//         />
//       </div>

//       {/* Date */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="date" className="block text-lg font-bold mb-1">Date</label>
//         <input
//           id="date"
//           onChange={(e) => setNewDate(e.target.value)}
//           value={newDate}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="date"
//           placeholder="Date"
//         />
//       </div>

//       {/* Price of Project */}
//       <div className="col-span-1 sm:col-span-1">
//         <label htmlFor="price" className="block text-lg font-bold mb-1">Price of Project</label>
//         <input
//           id="price"
//           onChange={(e) => setNewPrice(e.target.value)}
//           value={newPrice}
//           className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
//           type="number"
//           placeholder="Price of Project"
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="col-span-3 sm:col-span-3">
//         <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-6 rounded-full w-1/6 transition duration-300 ease-in-out">
//           Update Invoice
//         </button>
//       </div>
//     </form>
//     </>
//   );
// }


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
    <div className="my-20">

    </div>
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg  overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="text-sm font-medium text-gray-700 mb-1">
                {key.replace('new', '').replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                id={key}
                type={key.includes('Date') ? 'date' : key.includes('Price') || key.includes('Qty') || key.includes('gst') || key.includes('Cgst') || key.includes('Sgst') || key.includes('Igst') || key.includes('Balance') ? 'number' : 'text'}
                value={value}
                onChange={handleChange}
                className="mt-1 block w-full
                p-2 rounded-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder={key.replace('new', '').replace(/([A-Z])/g, ' $1').trim()}
              />
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