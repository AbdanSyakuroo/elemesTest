import Image from "next/image";

export default function Home() {
   return (
      <div className="w-full h-screen z-10">
         <Image src={"/assets/bgbg.png"} width={100} height={100} alt="elemesbg" className="absolute -z-10 w-full h-full opacity-5" />
         <header className="max-w-screen-lg p-5 mx-auto items-center flex justify-between">
            <div>
               <Image src={"/assets/logo.png"} alt="" width={200} height={200} />
            </div>
            <div>
               <ul className="flex gap-6">
                  <li className="text-gray-600 font-semibold">Home</li>
                  <li className="text-gray-600 font-semibold">About</li>
                  <li className="text-gray-600 font-semibold">Promotions</li>
                  <li className="text-gray-600 font-semibold">Blogs</li>
                  <li className="text-gray-600 font-semibold">Contact Us</li>
               </ul>
            </div>
            <div className="flex gap-5 mt-5">
               <a href="" className="py-2 text-black font-bold">Masuk</a>
               <a href="" className="px-5 py-2 bg-[#8BAC3E] rounded-full text-white">Daftar Sekarang</a>
            </div>

         </header>
         <div className="max-w-screen-lg p-5 mx-auto items-center flex justify-between">
            <div>
               <h1 className="text-[#8BAC3E] text-4xl font-bold">Good Food Us <br />Good Mood</h1>
               <h3 className="mt-7 w-1/2">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h3>
               <div className="mt-6 flex gap-5">
                  <a href="" className="px-4 py-2 bg-[#8BAC3E] shadow-md text-white font-semibold rounded-full"> Daftar Sekarang</a>
                  <a href="" className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-full">About Us</a>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="bg-slate-100 p-[200px] rounded-full"></div>
               <Image src={"/assets/makan.png"} alt="" width={350} height={350} className="absolute"/>
               <Image src={"/assets/cardProfile.png"} alt="" width={200} height={200} className="absolute mt-56 mr-60"/>
            </div>
            
         </div>
         <div>

         </div>
      </div>
   );
}
