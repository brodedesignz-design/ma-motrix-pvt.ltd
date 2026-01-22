"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppToggle() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "0325-3450683";
  const message = "Hello MA Motrix, I need information.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {open && (
        <div className="mb-3 bg-white rounded-lg shadow-lg p-4 w-64">
          <p className="text-sm text-gray-700 mb-3">
            Hi 👋 How can we help you?
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            className="block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
