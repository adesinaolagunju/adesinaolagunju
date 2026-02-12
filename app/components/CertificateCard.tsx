import Image from "next/image";
import {Certificate} from "../data/certificates"

interface Props {
  certificate: Certificate;
  onClick?: () => void;
}

export default function CertificateCard({ certificate, onClick }: Props) {
  const {
    title,
    issuer,
    displayDate,
    image,
    skills,
    category,
    featured,
    credentialUrl,
  } = certificate;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      className="
        rounded-2xl border border-gray-200 bg-white shadow-sm
        hover:shadow-xl hover:-translate-y-1
        transition duration-200 cursor-pointer
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full bg-gray-50">
        <Image
          src={image}
          alt={`${title} certificate`}
          fill
          className="object-contain p-4"
          sizes="(max-width:768px) 100vw, 33vw"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/70 text-white">
          {category}
        </span>

        {/* Featured badge */}
        {featured && (
          <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded bg-yellow-400 font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold leading-snug">{title}</h3>

        <p className="text-sm text-gray-600">
          {issuer} • {displayDate}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 text-xs">
          {skills.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="px-2 py-1 bg-gray-100 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Optional verify link */}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline"
            onClick={(e) => e.stopPropagation()}
          >
            Verify credential →
          </a>
        )}
      </div>
    </div>
  );
}
