import { Montserrat } from "next/font/google";
import Image from "next/image";
import {
  SlLocationPin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import whiteTitle from "/public/images/logowhite.png";

const montserrat = Montserrat({ subsets: ["latin"] });

function NavBar() {
  return (
    <section className="flex flex-row justify-between bg-primary w-screen px-24">
      <div className="flex flex-row items-center">
        <Image height={100} unoptimized src={whiteTitle} alt="Titolo" />
      </div>
      <div className="flex flex-row items-center text-white uppercase text-xs font-semibold gap-x-5">
        <h1>Offerte Business</h1>
        <h1>Noleggio Mensile</h1>
        <h1>Offerte per Privati</h1>
        <h1>Nuove Auto 2023</h1>
        <div className="flex flex-row gap-x-3 text-lg ml-2">
          <SlSocialFacebook />
          <SlSocialInstagram />
          <SlLocationPin />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${montserrat.className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <NavBar />
      </div>
    </main>
  );
}
