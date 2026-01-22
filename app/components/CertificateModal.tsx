"use client"

import Image from "next/image"

type Certificate = {
  title: string
  issuer?: string
  image: string
}

export default function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate | null
  onClose: () => void
}) {
  if (!certificate) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 transition-opacity duration-300 opacity-100"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div
        className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 sm:mx-6 lg:mx-0 overflow-hidden transform transition-all duration-300 translate-y-0 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-96 bg-gray-50 flex items-center justify-center p-4">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Info */}
        <div className="p-6 text-center sm:text-left space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">
            {certificate.title}
          </h3>
          {certificate.issuer && (
            <p className="text-gray-600 text-sm sm:text-base">
              Issued by {certificate.issuer}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
