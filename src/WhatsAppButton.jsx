import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5491144443479"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={28} />
        </a>

    );
}