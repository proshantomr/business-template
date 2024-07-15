import Image from "next/image";
import Navbar from "@/app/componen/common/header/navbar";
import Hero from "@/app/(publicpage)/landingpage/herosection/Hero";
import Video from "@/app/(publicpage)/landingpage/video/video";
import Feature from "@/app/(publicpage)/landingpage/feature/feature";
import Service from "@/app/(publicpage)/landingpage/service/service";

export default function Home() {
  return (
      <div>
        <Navbar/>
          <main>
              <Hero/>
              <Video/>
              <Feature/>
              <Service/>
          </main>
      </div>
  );
}
