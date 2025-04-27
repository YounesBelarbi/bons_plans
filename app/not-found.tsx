import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <h2 className="mt-2 text-2xl font-semibold">Page non trouvée</h2>
        <p className="mt-4 text-gray-600">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-blue-pastel px-4 py-2 font-medium text-white hover:bg-blue-pastel-dark"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
