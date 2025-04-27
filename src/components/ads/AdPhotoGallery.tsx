"use client";

import Image from "next/image";
import { useState } from "react";

// Générer des URLs d'images supplémentaires pour chaque propriété
function generateAdditionalImages(baseUrl: string, count = 4) {
  const images = [baseUrl];
  for (let i = 1; i <= count; i++) {
    // Ajouter un paramètre pour différencier les images
    images.push(`${baseUrl}&variant=${i}`);
  }
  return images;
}

const AdPhotoGallery = ({ property }: { property: any }) => {
  const images = generateAdditionalImages(property.imageUrl);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src="/assets/images/image.jpg"
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Sélecteur de photos */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square w-full overflow-hidden rounded-md ${
              selectedImage === image ? "ring-2 ring-blue-pastel" : ""
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Vue ${index + 1} de ${property.title}`}
              fill
              sizes="(max-width: 768px) 20vw, 10vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdPhotoGallery;
