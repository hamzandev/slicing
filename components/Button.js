import Link from "next/link";

export default function Button({ children, to }) {
  return (
    <Link
      href={to}
      className="px-6 lg:w-max w-full lg:text-start text-center py-3 rounded text-gray-100 font-poppins bg-gradient-to-r from-indigo-600 to-purple-600"
    >
      {children}
    </Link>
  );
}
