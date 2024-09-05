"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { HiOutlineDocumentAdd } from "react-icons/hi";

export const dynamic = "force-dynamic";

export default function AddInvoice() {
  const [formData, setFormData] = useState({
    client: "",
    project: "",
    services: "",
    address: "",
    state: "",
    city: "",
    pin: "",
    gst: "",
    cgst: "",
    sgst: "",
    igst: "",
    invNo: "",
    pfNo: "",
    balance: "",
    date: "",
    price: "",
  });

  const [loading, setLoading] = useState(true); // Initially true to show spinner
  const [formSubmitting, setFormSubmitting] = useState(false); // For form submission loading
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time, you can replace this with your actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay for demonstration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setError(null); // Reset any previous error

    if (Object.values(formData).some((field) => field === "")) {
      alert("All fields are required.");
      setFormSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...formData, invCount: 0, pfCount: 0 }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to add invoice.");
      }
    } catch (error) {
      console.error("Error adding invoice:", error);
      setError(error);
    } finally {
      setFormSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <h2 className="text-2xl font-bold mb-2">Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Invoice</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-4">
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={
                    key === "date"
                      ? "date"
                      : ["pin", "cgst", "sgst", "igst", "balance", "price"].includes(key)
                      ? "number"
                      : "text"
                  }
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  required
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={formSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
            >
              {formSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <HiOutlineDocumentAdd className="mr-2" />
              )}
              {formSubmitting ? "Adding Invoice..." : "Add Invoice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
