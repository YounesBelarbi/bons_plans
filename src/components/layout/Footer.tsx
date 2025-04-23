import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-blue-pastel-light border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Catégories d'annonces */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Catégories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/immobilier"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Immobilier
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/vehicules"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Véhicules
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/emploi"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Emploi
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/services"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/vacances"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Vacances
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/mode"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Mode
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/maison"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Maison
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/multimedia"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Multimédia
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Liens utiles
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/aide"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/securite"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Conseils de sécurité
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Conditions générales d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  Gestion des cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/rgpd"
                  className="text-gray-600 hover:text-blue-pastel-dark"
                >
                  RGPD
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter et réseaux sociaux */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Restez connecté
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières
              annonces et actualités.
            </p>
            <div className="mb-4 flex">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-pastel focus:outline-none"
              />
              <button className="rounded-r-md bg-yellow-pastel px-4 py-2 text-sm font-medium text-gray-800 hover:bg-yellow-pastel-dark">
                S'inscrire
              </button>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-pastel-dark"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-pastel-dark"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-pastel-dark"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-pastel-dark"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-200 bg-white py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Votre Site d'Annonces. Tous droits
            réservés.
          </p>
          <p className="mt-2">
            Société immatriculée au RCS de Paris sous le numéro 123 456 789 |
            Siège social : 123 Avenue des Annonces, 75000 Paris
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
