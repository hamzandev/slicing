import Link from "next/link";

export default function NavLink({ children, to }) {
  return (
    <a
      href={to}
      className="text-baseText hover:text-primary duration-150 text-sm font-poppins"
    >
      {children}
    </a>
  );
}
