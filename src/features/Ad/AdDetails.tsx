// import Header from "@/components/header";
import PhotoGallery from "@/components/ads/AdPhotoGallery";
import PropertyDetails from "@/components/ads/AdPropertyDetail";
import PropertyMap from "@/components/ads/AdPropertyMap";
import SimilarProperties from "@/components/ads/AdSimilarProperty";
import { adData } from "../../../data_to_delete/data.ts";
import { notFound } from "next/navigation";

type AdDetailProps = {
  params: { id: string };
};

const AdDetails: FC<AdDetailProps> = ({ params }) => {
  console.log("🚀 ~ params:", params)
  const { id } = params;
  console.log("🚀 ~ AdDetails ~ id:", id);

  // const id = Number.parseInt(params.id);
  const property = adData.find((ad) => ad.id === Number.parseInt(id));
  // const property = adData.find((ad) => ad.id === id);
  console.log("🚀 ~ adData:", adData)
  console.log("🚀 ~ property:", property)

  if (!property) {
    notFound();
  }

  // Trouver des propriétés similaires (même type ou même région)
  const similarProperties = adData
    .filter(
      (ad) =>
        ad.id !== id &&
        (ad.location.includes(property.location.split(",")[0]) ||
          (ad.title.includes("Appartement") &&
            property.title.includes("Appartement")) ||
          (ad.title.includes("Maison") && property.title.includes("Maison")))
    )
    .slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Galerie de photos (à gauche/ouest) */}
            <div className="lg:col-span-2">
              <PhotoGallery property={property} />
            </div>

            {/* Détails de la propriété (à droite/est) */}
            <div>
              <PropertyDetails property={property} />
            </div>
          </div>

          {/* Carte de localisation */}
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Localisation</h2>
            <PropertyMap location={property.location} />
          </div>

          {/* Propriétés similaires */}
          <div className="mt-16">
            <SimilarProperties properties={similarProperties} />
          </div>
        </div>
      </main>
    </div>
  );
});

export default AdDetails;
