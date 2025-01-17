
"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import InvoicePdf from "./InvoicePdf";
import PfPdf from "./PfPdf";
import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";

const DisplayCardInfo = ({ id }) => {
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [invoiceCount, setInvoiceCount] = useState(0);
  const [porformaCount, setPorformaCount] = useState(0);


  //handle invoice counts
  const handleCount = async () => {
    
    try {

      console.log(invoiceCount + 1)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newInvCount: invoiceCount + 1,
        }),
      });

    
      if (!res.ok) {
        throw new Error("Failed to update invoice");
      }
      console.log('Api Successfully updated')

    } catch (error) {
      console.log(error);
    }

    setInvoiceCount(invoiceCount + 1);
  };


  
//handle PF counts
  const handlePfCount = async () => {
    
    try {

      console.log(invoiceCount + 1)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newPfCount: porformaCount + 1,
        }),
      });

    
      if (!res.ok) {
        throw new Error("Failed to update invoice");
      }
      console.log('Api Successfully updated')

    } catch (error) {
      console.log(error);
    }

    setPorformaCount(porformaCount + 1);
  };


  // Prepare the data to be sent
  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch invoice");
        }

        const data = await res.json();
        console.log(data)
        const invoiceFlow = data.invoices
        console.log("count is",data.invoice.pfCount);
        setInvoiceCount(data.invoice.invCount)
        setPorformaCount(data.invoice.pfCount);
        setInvoice(data.invoice);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInvoice();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice) {
    return <div>Invoice not found</div>;
  }

  // Destructuring the invoice object
  const {
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
    qty, // Quantity missing
    pfNo,
    invNo,
    date,
    price,
    invCount,
    pfCount
  } = invoice;

  return (
    <div>
    <Navbar/>
    {/* <Link className='text-black h-[300px] font-bold hover:scale-110 transition ease-in-out duration-300 ' href={"/"}><FontAwesomeIcon icon={faHome}/></Link>  */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="mb-2">
            <span className="font-bold">Client:</span> {client}
          </p>
          <p className="mb-2">
            <span className="font-bold">Project:</span> {project}
          </p>
          <p className="mb-2">
            <span className="font-bold">Address:</span> {address}
          </p>
          <p className="mb-2">
          <span className="font-bold">Services:</span>
<ul>
  {services.split(",").map((service, index) => (
    <li key={index}>{service.split(",").join("\n")}</li>
  ))}
</ul>
          </p>
          <p className="mb-2">
            <span className="font-bold">State:</span> {state}
          </p>
          <p className="mb-2">
            <span className="font-bold">City:</span> {city}
          </p>
          <p className="mb-2">
            <span className="font-bold">PIN:</span> {pin}
          </p>
          <p className="mb-2">
            <span className="font-bold">GST:</span> {gst}
          </p>
          <p className="mb-2">
            <span className="font-bold">CGST:</span> {cgst}
          </p>
          <p className="mb-2">
            <span className="font-bold">SGST:</span> {sgst}
          </p>
          <p className="mb-2">
            <span className="font-bold">IGST:</span> {igst}
          </p>
          <p className="mb-2">
            <span className="font-bold">Balance:</span> {balance}
          </p>
          <p className="mb-2">
            <span className="font-bold">Quantity:</span> {qty}
          </p>
          <p className="mb-2">
            <span className="font-bold">PF Number:</span> {pfNo}
          </p>
          <p className="mb-2">
            <span className="font-bold">Invoice Number:</span> {invNo}
          </p>
          <p className="mb-2">
            <span className="font-bold">Date:</span> {date}
          </p>
          <p className="mb-2">
            <span className="font-bold">Price:</span> {price}
          </p>

          <p>Invoice dowloaded: {invoiceCount} times</p>
          <p>PF dowloaded: {porformaCount} times</p>
          {/* <p>
         PF dowloaded:  {pfCount} times
        </p> */}
        </div>
      </div>

      <div id="invoiceDownload" onClick={handleCount}>
        <InvoicePdf invoice={invoice} />
      </div>

      <br />
      <div onClick={handlePfCount}>
    <PfPdf invoice={invoice}/>
    </div>
      <br />

      {/* <form onSubmit={handleCountSubmit}>
        <button type="submit" value={invoiceCount}>
          
        </button>
      </form>
      <form onSubmit={handlePfCountSubmit}>
        <button type="submit" value={porformaCount}>
          
        </button>
      </form> */}
    </div>
  );
};

export default DisplayCardInfo;
