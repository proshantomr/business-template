import Image from "next/image";
import Navbar from "@/app/componen/common/header/navbar";
import Hero from "@/app/(publicpage)/landingpage/herosection/Hero";

export default function Home() {
  return (
      <div>
        <Navbar/>
          <main>
              <Hero/>
          </main>
      </div>
  );
}
