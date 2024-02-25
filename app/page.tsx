import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-14">
      <div className="col-span-3 flex justify-start pt-2">
        <div className="text-2xl hover:bg-gray-900 rounded-full h-fit transition-all cursor-pointer p-3">
          <BsTwitterX/>
        </div> 
      </div>
      <div className="col-span-6 border-l-[0.1px] border-r-[0.1px] border-gray-700"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
