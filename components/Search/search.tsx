export default function Search() {
    return (
        <div className="max-w-[785px] sm:w-full m-auto rounded-[10px] overflow-hidden mt-[50px] shadow-2xl shadow-[#5C94FF45]">
          <div className="py-[30px] px-[50px] bg-[url('img/search-bg.png')] bg-no-repeat bg-contain sm:bg-cover sm:px-[15px] sm:bg-[length:100%_100%]">
            <div className="text-center text-white font-bold">I want to read review about:</div>        
            <form className="max-w-full mx-auto mt-[20px]" action="opps">   
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full h-[70px] sm:h-[55px] p-5 sm:text-[14px] text-[16px] italic text-[#474747] placeholder-[#474747] border border-[#ffffff45] rounded-lg bg-[#000000] focus:border-none" placeholder="Seaside Hotel, Eiger Hike, etc" />
                    <button type="submit" className="bg-gradient-to-t from-[#7E67D9] to-[#492EB4] text-white sm:relative sm:right-[0px] sm:m-auto sm:block sm:w-full sm:mt-[20px] absolute right-[10px] top-0 bottom-0 m-auto h-[48px] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[16px] sm:text-[14px] px-4 sm:px-[12px]">Get Notification</button>
                </div>
            </form>
            </div>
        </div>
    );

}