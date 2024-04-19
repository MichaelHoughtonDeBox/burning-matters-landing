import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-2 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1713515589/icon_ocjtvw.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}