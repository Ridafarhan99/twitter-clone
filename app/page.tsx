import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3"><BsTwitterX /></div>
      <div className="col-span-6 border-l-[0.1px] border-r-[0.1px] border-gray-700"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
