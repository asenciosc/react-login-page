import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center py-8">
      <Link href={"/"} className="mx-4">
        Home
      </Link>
      <Link href={"/auth/login"} className="mx-4">
        Register
      </Link>
    </nav>
  );
}
