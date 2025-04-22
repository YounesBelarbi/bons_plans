import SearchBar from "@/components/layout/SearchBar";
import { Button } from "@/components/ui/button";
import { LogIn, Plus } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full border-b h-28 flex justify-center">
      <div className="container flex h-16 w-7xl  items-center justify-between px-4 md:px-6">
        {/* Logo on the left */}
        <Logo />
        <SearchBar placeholder="Rechercher sur bons plans" />

        {/* Mobile menu button */}
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-4">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full pl-8"
                />
              </div>
              <Button className="w-full justify-start" variant="ghost">
                <Plus className="mr-2 h-4 w-4" />
                Déposer une annonce
              </Button>
              <Button className="w-full justify-start" variant="ghost">
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
            </div>
          </SheetContent>
        </Sheet> */}

        {/* Action buttons */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button
            variant="outline"
            className="hidden sm:flex bg-secondary text-black"
          >
            <Plus className="mr-2 h-4 w-4" />
            Déposer une annonce
          </Button>
          <Button className="bg-secondary text-black" variant="outline">
            <LogIn className="mr-2 h-4 w-4" />
            Se connecter
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
