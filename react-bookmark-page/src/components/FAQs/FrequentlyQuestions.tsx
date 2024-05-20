import { useState } from "react";
import { FaqsData, Data } from "./Data";

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="mb-[7.68rem] max-w-[540px] mx-auto">
            <div className="text-center text-dark-slate-blue px-8 xl:px-0 mb-[4rem] xl:mb-[3.5rem]">
                <h2 className="text-[1.5rem] xl:text-[2rem] leading-[1.875rem] xl:leading-[3.25rem] tracking-[-0.075px] xl:tracking-[-0.1px] font-medium mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="opacity-50 text-[.938rem] xl:text-[1.125rem] xl:max-w-[33.75rem] leading-[1.5rem]">
                    Here are some of our FAQs. If you have any other
                    questions you'd like answered please feel free to
                    email us.
                </p>
            </div>
            <div className="mb-[2.5rem]">
                {Data.map((data, index) => (
                    <FaqsData
                        key={index}
                        index={index}
                        data={data}
                        isOpen={activeIndex === index}
                        onClick={() => toggleQuestion(index)} />
                ))}
            </div>
            <div className="mt-[3rem] flex justify-center">
                <a href="#"
                    className="font-medium bg-blue text-white leading-[1.75rem] tracking-[0.25px] text-[.875rem]
                    py-[.625rem] px-[1.5rem] rounded-[.315rem] border-2 border-blue hover:text-blue hover:bg-white
                    transition duration-300 ease-in-out">
                    More Info
                </a>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions



