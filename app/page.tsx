import Head from "next/head";
import Nav from "./nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        main
      </main>
    </div>
  );
}
