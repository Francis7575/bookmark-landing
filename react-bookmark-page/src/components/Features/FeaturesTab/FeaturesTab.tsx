import { Data } from "./Data"
import { useState } from "react"

const FeaturesTab = () => {
    const [activeTab, setActiveTab] = useState<number | null>(0)

    const handleClick = (index: number) => {
        setActiveTab(index === activeTab ? null : index)
    }

    return (
        <div>
            <div className="flex flex-col px-8 mb-[4.5rem] lg:flex-row lg:justify-center lg:gap-[5.656rem] 
            lg:border-b lg:border-lightgray md:max-w-[45.625rem] md:mx-auto lg:mb-[4.56rem]">
                {Data.map((tab, index) => (
                    <button key={index}
                        onClick={() => handleClick(index)}
                        className={`border-t border-lightgray leading-4 tracking-[0.533px] py-[1.25rem] xl:py-0 relative 
                        lg:border-none xl:pb-[1.688rem]                             
                            ${index === 2 && 'border-b border-lightgray lg:border-none'}
                            ${activeTab === index ? 'text-dark-slate-blue tab-selected' : 'text-dark-slate-blue-75 lg:hover:text-light-red'}`}>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div>
                {Data.map((tab, index) => (
                    <div key={index}
                        className={`bg-fixed bg-rectangle-pattern bg-no-repeat bg-size-sm bg-first-tab-sm 
                        xl:bg-first-tab-xl lg:bg-size-lg xl:bg-size-xl lg:bg-first-tab-lg 
                        ${index === 0 && 'pb-12'}
                        ${activeTab === index ? 'tab-content tab-content-active' : 'tab-content'}`}>

                        {activeTab === index && (
                            <div className="md:flex md:items-center md:justify-evenly xl:h-[550px]">
                                <div>
                                    <img src={tab.image}
                                        className="max-w-[311px] lg:max-w-[450px] w-full h-auto mx-auto xl:max-w-[536px]"
                                        alt=""
                                    />
                                </div>
                                <div className={`text-center mt-[4.5rem] md:text-left md:mt-0`}>
                                    <h2 className="text-[1.5rem] font-medium tracking-[-0.075px] leading-[3.25rem]
                                    text-dark-slate-blue xl:text-[2rem] xl:leading-[3.25rem] xl:tracking-[-0.1px] xl:mb-4">
                                        {tab.heading}
                                    </h2>
                                    <p className="text-[0.938rem] md:text-[1.125rem] md:max-w-[300px] lg:max-w-[445px] mx-auto leading-[1.5rem] xl:leading-[1.75rem] text-dark-slate-blue opacity-50 mb-4 xl:mb-8 px-8 md:px-0">
                                        {tab.paragraph}
                                    </p>
                                    <a href="#"
                                        className="text-white font-medium tracking-[0.25px] leading-[1.75rem] text-[.875rem]
                                        bg-blue rounded-[.313rem] py-[.625rem] px-[1.5rem] border-2 border-blue hover:text-blue hover:bg-white
                                        transition duration-300 ease-in-out inline-block">
                                        {tab.link}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesTab