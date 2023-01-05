import Link from "next/link";
import logo from "../public/assets/logo.png";
import Image from "next/image";
function NotFound() {
  return (
    <div className="h-screen flex items-center flex-col font-poppins justify-center">
      <Image src={logo} alt="logo" className="mb-3" />
      <h2 className="text-9xl text-primary font-bold">404</h2>
      <span className="text-gray-600 text-xl mb-3">Page is not found!</span>
      <Link
        href="/"
        className="text-sm font-quicksand font-semibold text-blue-600 underline"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
