import Image from "next/image";
import {Inter} from "next/font/google";
import Standard from "@/components/global/Standard";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return <div>
    <Standard />
  </div>;
}
