import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full h-screen z-10">        
   <Image src={"/assets/bgbg.png"} width={100} height={100} alt="elemesbg" className="absolute -z-10 w-full h-full opacity-5"/>
      <header className="max-w-screen-lg p-5 mx-auto items-center flex justify-between">
        <div>
           <Image src={"/assets/logo.png"} alt="" width={200} height={200}/>
        </div>
       <div>
         <ul className="flex gap-6">
          <li className="text-gray-400 font-semibold">Home</li>
          <li className="text-gray-400 font-semibold">About</li>
          <li className="text-gray-400 font-semibold">Promotions</li>
          <li className="text-gray-400 font-semibold">Blogs</li>
          <li className="text-gray-400 font-semibold">Contact Us</li>
        </ul>
       </div>
       <div className="flex gap-5">
          <a href="" className="py-2 text-black font-bold">Masuk</a>
          <a href="" className="px-5 py-2 bg-green-600 rounded-full text-white">Daftar Sekarang</a>
       </div>
       
      </header>
<div className="flex">
    <div>
       <h1>Good Food Us Good Mood</h1>
       <h3>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h3>
       <a href="">Daftar Sekarang</a>
       <a href="">About Us</a>
    </div>
</div>
      <div>

      </div>
   </div>
  );
}
