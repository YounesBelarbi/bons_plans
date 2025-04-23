import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">LOGO</span>
      </Link>
    </div>
  );
};

export default Logo;
