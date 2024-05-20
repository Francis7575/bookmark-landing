
const SimpleBookmark = () => {
    return (
        <div className="mt-[3rem] md:mt-0">
            <div className="text-center mb-8 md:text-left">
                <h1 className="text-dark-slate-blue text-[1.875rem] font-medium leading-[2.5rem] mb-4 
                    md:max-w-[20.75rem] xl:max-w-[33.75rem] px-[1.972rem] md:px-0 xl:text-[3rem] xl:leading-[3.25rem]
                    xl:tracking-[-0.15px] xl:mb-[1.5rem]">
                    A Simple Bookmark Manager
                </h1>
                <p className="px-[1.972rem] md:px-0 text-dark-slate-blue opacity-50 text-[.938rem] leading-[1.5rem]
                    md:max-w-[24rem] xl:text-[1.125rem] xl:max-w-[33.75rem] xl:leading-[1.75rem]">
                    A clean and simple interface to organize your
                    favourite websites. Open a new browser tab and
                    see your sites load instantly. Try it for free.
                </p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-[.875rem] xl:gap-4 mb-4 md:mb-0">
                <a href="#"
                    className="text-white bg-blue rounded-[.313rem] py-[.625rem] px-4 shadow-links font-medium 
                    leading-[1.75rem] text-[.875rem] tracking-[0.25px] border-2 border-blue hover:text-blue hover:bg-white
                    transition duration-300 ease-in-out">
                    Get it on chrome
                </a>
                <a href="#"
                    className="text-dark-slate-blue-75 bg-white shadow-firefox-a rounded-[.313rem] 
                    shadow-links py-[.625rem] px-4 font-medium leading-[1.75rem] text-[.875rem] tracking-[0.25px] border-2 border-white
                    hover:border-grayish-blue transition duration-300 ease-in-out">
                    Get it on Firefox
                </a>
            </div>
        </div>
    )
}

export default SimpleBookmark