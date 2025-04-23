"use client";

import Image from "next/image";
import Link from "next/link";

type AdCardProps = {
  id: number;
  title: string;
  price: string;
  location: string;
  features: string;
  imageUrl: string;
};
const AdCard = ({
  id,
  title,
  price,
  location,
  features,
  imageUrl,
}: AdCardProps) => {
  return (
    <Link href={`/annonce/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src="/assets/images/image.jpg"
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-blue-pastel px-2 py-1 text-xs font-medium text-white bg-primary rounded-r-sm">
            {price}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg mb-1 font-medium text-gray-800 line-clamp-1 group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-1">{location}</p>
          <p className="text-sm text-gray-500 line-clamp-1">{features}</p>
        </div>
      </div>
    </Link>
  );
};

export default AdCard;
