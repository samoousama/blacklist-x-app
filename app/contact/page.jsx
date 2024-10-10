import Image from "next/image";
import Logo from "../img/logo.svg"
import Link from 'next/link';



const Contact = () => {
    return (
        <div className="min-h-screen bg-[url('img/sec-bg.png')] bg-no-repeat bg-cover sm:px-[10px] md:px-[10px]">
            <div className="pt-[30px] text-center m-auto flex sm:block items-center justify-center relative px-[40px] sm:pl-[0px] sm:pt-[20px]">
            <Link href="/">
                <Image
                    src={Logo}
                    width={167}
                    height={43}
                    alt="Logo"
                />
            </Link>
            <div className="text-right absolute right-[40px] top-[35px] sm:right-[10px] sm:top-[30px]">
                <Link href="contact" className="text-[#E2E2E2] underline">Write a review</Link>
            </div>
            </div>
           <div className="pt-[40px]">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
                    <div className="text-center">
                        <div className="font-extrabold sm:text-[30px] text-[50px] leading-[70px] md:text-4xl [text-wrap:balance] bg-clip-text text-[#fff] ">Write an honest review</div>                
                    </div>
                </div>
            </div>  
            <div className="max-w-[700px] m-auto">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-[20px]"> 
                <div className="text-left">
                    <input type="text" placeholder="Full Name" className="w-full h-[50px] border border-[#fff] border-b-1 border-t-0 border-l-0 border-r-0 bg-transparent text-white placeholder-[#fff] focus:outline-none" />
                </div>  
                <div className="text-left">
                    <input type="email" placeholder="Email" className="w-full h-[50px] border border-[#fff] border-b-1 border-t-0 border-l-0 border-r-0 bg-transparent text-white placeholder-[#fff] focus:outline-none" />
                </div>  
              </div>   
              <div className="text-left mt-[30px]">
                 <textarea placeholder="Write a review" className="w-full h-[150px] border border-[#fff] border-b-1 border-t-0 border-l-0 border-r-0 bg-transparent text-white placeholder-[#fff] focus:outline-none"></textarea>                       
              </div>  
              <div className="text-center mt-[30px]">
              <button type="submit" className="bg-gradient-to-t from-[#7E67D9] to-[#492EB4] text-white sm:relative sm:right-[0px] sm:m-auto sm:block sm:w-full sm:mt-[20px] m-auto h-[48px] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[16px] sm:text-[14px] px-16 sm:px-[12px]">Submit</button>    
              </div>
            </div>
        </div>    
    );
}
export default Contact;