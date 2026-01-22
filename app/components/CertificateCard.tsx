import Image from "next/image"

interface Props {
  title: string
  issuer: string
  issued: string
  image: string
  skills: string[]
  onClick?: () => void
}

export default function CertificateCard({
  title,
  issuer,
  issued,
  image,
  skills,
  onClick, // <-- accept the prop
}: Props) {
  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white shadow hover:shadow-lg transition cursor-pointer"
      onClick={onClick} // <-- call it here
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 rounded-t-2xl"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-gray-600">
          {issuer} • {issued}
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-100 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
