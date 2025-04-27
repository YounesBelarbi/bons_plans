import { CalendarIcon } from "lucide-react";

// Fonction pour générer des détails supplémentaires basés sur le titre et les caractéristiques
function generatePropertyDetails(property: any) {
  const { title, features } = property;

  // Extraire les informations des caractéristiques
  const featureParts = features.split("•").map((part) => part.trim());
  const rooms = featureParts.find(
    (part) => part.includes("chambres") || part.includes("pièce")
  );
  const area = featureParts.find((part) => part.includes("m²"));

  // Générer une description fictive
  let description = `Magnifique ${title.toLowerCase()} idéalement situé${title.includes("Maison") || title.includes("Villa") || title.includes("Chalet") ? "e" : ""} à ${property.location.split(",")[0]}. `;

  if (title.includes("Appartement")) {
    description +=
      "Cet appartement offre un cadre de vie agréable avec une belle luminosité et des finitions de qualité. La cuisine équipée s'ouvre sur un séjour spacieux. ";
  } else if (title.includes("Maison")) {
    description +=
      "Cette maison familiale vous séduira par ses volumes généreux et son agencement fonctionnel. Le jardin bien entretenu est parfait pour profiter des beaux jours. ";
  } else if (title.includes("Studio")) {
    description +=
      "Ce studio a été pensé pour optimiser chaque mètre carré. Idéal pour un premier achat ou un investissement locatif. ";
  } else if (title.includes("Loft")) {
    description +=
      "Ce loft au caractère unique vous offre de beaux volumes et une atmosphère chaleureuse. Les éléments industriels d'origine ont été préservés avec soin. ";
  }

  description +=
    "À proximité des commerces, transports et services. À visiter sans tarder!";

  // Générer des critères supplémentaires
  const additionalCriteria = [
    { name: "Surface", value: area || "NC" },
    { name: "Pièces", value: rooms || "NC" },
    {
      name: "Année de construction",
      value: Math.floor(1950 + Math.random() * 70),
    },
    {
      name: "Chauffage",
      value: ["Gaz", "Électrique", "Pompe à chaleur"][
        Math.floor(Math.random() * 3)
      ],
    },
    { name: "DPE", value: ["A", "B", "C", "D"][Math.floor(Math.random() * 4)] },
    {
      name: "Taxe foncière",
      value: `${Math.floor(800 + Math.random() * 1200)} €/an`,
    },
    {
      name: "Charges",
      value:
        title.includes("Appartement") || title.includes("Studio")
          ? `${Math.floor(80 + Math.random() * 150)} €/mois`
          : "NC",
    },
  ];

  return {
    description,
    criteria: additionalCriteria,
  };
}

const AdPropertyDetail = ({ property }: { property: any }) => {
  const { description, criteria } = generatePropertyDetails(property);

  // Date de mise en ligne (30 jours avant aujourd'hui)
  const listingDate = new Date();
  listingDate.setDate(listingDate.getDate() - 30);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(listingDate);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
        <p className="mt-1 text-lg font-semibold text-blue-pastel text-gray-800">
          {property.price}
        </p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <span>Mise en ligne le {formattedDate}</span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800">Description</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Caractéristiques
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm text-gray-500">{criterion.name}</span>
              <span className="font-medium text-gray-800">
                {criterion.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-secondary p-4">
        <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
        <p className="mt-2 text-gray-700">
          Intéressé(e) par ce bien ? Contactez notre agence au 01 23 45 67 89 ou
          remplissez le formulaire de contact.
        </p>
        <button className="mt-3 w-full rounded-md bg-blue-pastel px-4 py-2 text-center font-medium text-white hover:bg-blue-pastel-dark">
          Contacter l'agence
        </button>
      </div>
    </div>
  );
};

export default AdPropertyDetail;
