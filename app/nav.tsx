"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import Image from "next/image";
import { DefaultUserIcon } from "../public/images/default-user-icon.png";

export default function Nav() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="flex items-center py-8">
      <Link href={"/"} className="mx-4">
        Home
      </Link>
      <ul>
        {!user && (
          <Link href={"/auth/"} className="mx-4">
            Register
          </Link>
        )}
        {user && (
          <div className="rounded-full overflow-hidden">
            <Link href={"/dashboard"} className="">
              <Image
                className=""
                height={64}
                width={64}
                src={user.photoURL || DefaultUserIcon}
                alt=""
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
