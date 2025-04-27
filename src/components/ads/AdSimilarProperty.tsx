"use client";

import { useState } from "react";
import AdCard from "../../features/Ad/AdCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const adSimilarProperty = ({ properties }: { properties: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const nextPage = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleProperties = properties.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Biens similaires</h2>
        {totalPages > 1 && (
          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              disabled={currentIndex === 0}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextPage}
              disabled={currentIndex === totalPages - 1}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleProperties.map((property) => (
          <AdCard
            key={property.id}
            id={property.id}
            title={property.title}
            price={property.price}
            location={property.location}
            features={property.features}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default adSimilarProperty;
