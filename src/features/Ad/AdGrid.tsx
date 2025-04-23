import AdCard from "./AdCard";
import { adData } from "../../../data_to_delete/data.ts";

const AdGrid = () => {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Annonces immobilières
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {adData.map((ad) => (
          <AdCard
            key={ad.id}
            id={ad.id}
            title={ad.title}
            price={ad.price}
            location={ad.location}
            features={ad.features}
            imageUrl={ad.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AdGrid;
