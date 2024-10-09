import Image from "next/image";
import Logo from "../img/logo.png"
import Link from 'next/link';


const Opps = () => {
  return (
    <div className="min-h-screen bg-[url('img/sec-bg.png')] bg-no-repeat bg-cover sm:px-[10px] md:px-[10px]">
      <div className="pt-[30px] text-center m-auto flex sm:block items-center justify-center relative px-[40px] sm:pl-[0px] sm:pt-[20px]">
          <Image
            src={Logo}
            width={167}
            height={43}
            alt="Logo"
          />
          <div className="text-right absolute right-[40px] top-[35px] sm:right-[10px] sm:top-[30px]">
              <Link href="contact" className="text-[#E2E2E2] underline">Write a review</Link>
          </div>
      </div>
      <div className="pt-[40px]">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
            <div className="text-center">
                <div className="font-extrabold sm:text-[30px] text-[50px] leading-[70px] md:text-4xl [text-wrap:balance] bg-clip-text text-[#fff] ">Oops! We dont have a verified review for that yet </div>                
            </div>
        </div>
        <p className="text-[#BDBDBD] max-w-[650px] m-auto text-center pt-[0px] sm:text-[14px] sm:max-w-[100%]">Enter your email and we will have our due diligence team investigate and do some research to get you a response within 2 business days!</p>
      </div>
      <div>
      <div className="bg-gradient-to-t from-[#5D40D6] to-[#AC99FF] max-w-[800px] m-auto rounded-[10px] overflow-hidden mt-[50px] shadow-2xl shadow-[#5C94FF45]">
        <div className="py-[30px] px-[50px] bg-gradient-to-t from-[#021531] to-[#143566] m-[2px] rounded-[10px] sm:px-[15px]">
            <div className="text-center text-white font-bold">I want to read review about:</div>        
            <form className="max-w-full mx-auto mt-[20px]" action="/opps">   
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full h-[70px] sm:h-[55px] p-5 sm:text-[14px] text-[16px] italic text-[#474747] placeholder-[#474747] border border-[#ffffff45] rounded-lg bg-[#000000] focus:border-none" placeholder="Enter Email Address" />
                    <button type="submit" className="bg-gradient-to-t from-[#7E67D9] to-[#492EB4] text-white sm:relative sm:right-[0px] sm:m-auto sm:block sm:w-full sm:mt-[20px] absolute right-[10px] top-0 bottom-0 m-auto h-[48px] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[16px] sm:text-[14px] px-[50px] sm:px-[12px]">Submit</button>
                </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Opps;