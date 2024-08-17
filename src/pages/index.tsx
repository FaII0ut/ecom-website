import Image from "next/image";
import {Inter} from "next/font/google";
import Modern from "@/components/global/Modern";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return <div>
    <Modern />
  </div>;
}
