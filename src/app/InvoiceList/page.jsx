
"use client"

import React, { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const getInvoices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const invoiceFlow = await res.json();

    console.log(invoiceFlow.invoices)

    return invoiceFlow.invoices
  } catch (error) {
    console.log("Error loading invoices", error);
  }
};

const InvoiceList = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router =useRouter()

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedInvoices = await getInvoices();
        setDatas(fetchedInvoices);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleRouting = (Id) =>{

    
  // }
  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 ">
        {datas.map((invoice, index) => (
          <div
            key={index}
            className="bg-white shadow-md border hover:bg-amber-400 hover:transform 
            hover:scale-105 
            transition duration-500 ease-in-out  border-gray-300 rounded-lg p-6"
          >
            <Link
              href={`/getOneInvoice/${invoice._id}`}
            >
              <div
               
                className="flex justify-between items-start bg-blue-300
           hover:bg-zinc-700 hover:text-white transition duration-500 ease-in-out
            rounded-lg shadow-md p-6 py-2"
              >
                <div>
                  <h2 className="font-bold text-xl mb-4">
                    Client: {invoice.client}
                  </h2>
                  <div className="mb-2">
                    <span className="font-bold">Project Name:</span>{" "}
                    {invoice.project}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Services:</span>{" "}
                    {invoice.services}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Address:</span>{" "}
                    {invoice.address}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">City:</span> {invoice.city}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">State:</span> {invoice.state}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">PIN:</span> {invoice.pin}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">invoice downloaded:</span> {invoice.invCount} times
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">pf downloaded:</span> {invoice.pfCount} times
                  </div>
                  
                </div>
              </div>
            </Link>

            <div className="flex gap-2 my-4">
              <RemoveBtn id={invoice._id} />
              <Link href={`/editInvoice/${invoice._id}`}>
                <button
                  className="bg-indigo-700 text-white hover:bg-green-400 hover:text-red-700 transition-colors
                   duration-300 py-2 px-4 rounded-lg"
                >
                  Edit Invoice
                </button>
              </Link> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InvoiceList;


