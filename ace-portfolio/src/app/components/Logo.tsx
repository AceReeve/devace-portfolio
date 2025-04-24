import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.svg"  // You'll need to add your logo file to the public directory
        alt="Dev Ace Logo"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
      <span className="ml-3 text-xl font-medium text-white">Dev Ace</span>
    </Link>
  );
}
