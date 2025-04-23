import { CalendarIcon, Clock } from "lucide-react";
const HeroBanner = () => {
  return (
    <div className="w-full mt-10 bg-primary p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-pastel text-white text-xs font-medium">
          Annonces récentes
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Trouvez votre prochain bien</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Découvrez nos meilleures offres immobilières
          </h1>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>24 Avril, 2023</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Mis à jour récemment</span>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-yellow-pastel flex items-center justify-center shadow-lg">
          <span className="text-4xl">🏠</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
