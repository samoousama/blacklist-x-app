import Image from "next/image";
import Logo from "./img/logo.svg"
import Search from "../components/Search/search"
import Review from "../components/Review/review"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('img/sec-bg.png')] bg-no-repeat bg-cover sm:px-[10px] md:px-[10px]">
      <div className="pt-[30px] text-center flex justify-center items-center">
        <Link href="">
          <Image
            src={Logo}
            width={167}
            height={43}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="pt-[50px]">
        <h3 className="text-center text-white font-bold text-[36px] sm:text-[15px] md:text-[16px]">Read verified & vetted <span className="line-through">negative reviews.</span> </h3>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
                <div className="font-extrabold sm:text-[30px] text-[90px] leading-[70px] sm:leading-[50px] md:text-4xl [text-wrap:balance] bg-clip-text text-[#fff] ">Know the <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide text-left leading-tight [&amp;_li]:block">
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">eCommerce</li>
                        <li aria-hidden="true" className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Finance</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">eCommerce</li>
                        <li aria-hidden="true" className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Finance</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">eCommerce</li>
                        <li aria-hidden="true" className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Finance</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Experience</li>
                        <li className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">eCommerce</li>
                        <li aria-hidden="true" className="bg-gradient-to-t from-[#CFC3FF] to-[#492EB4] text-transparent bg-clip-text">Finance</li>
                    </ul>
                </span></div>                
            </div>
        </div>
        <div className="text-center text-white text-[32px] font-[700] sm:text-[15px] md:text-[16px] mt-[-5px]">
          you can and cannot trust.
        </div>
        <p className="text-[#BDBDBD] max-w-[690px] m-auto text-center pt-[30px] sm:text-[14px] sm:max-w-[100%]">You spend a ton of time & money making plans to have fun with your friends and family, don’t let it get ruined by a scam or a downright horrible experience. Due diligence of any experience just one search away. Read real reviews, write real reviews.</p>
      </div>
      <div>
        <Search/>
      </div>
      <div>
        <Review/>
      </div>
    </div>
  );
}
