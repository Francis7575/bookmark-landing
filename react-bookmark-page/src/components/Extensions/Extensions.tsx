import { ExtensionData, Data } from "./Data"

const Extensions = () => {
    return (
        <section className="mt-[4.81rem] mb-[8.75rem] xl:mb-[14.313rem] max-w-[540px] mx-auto lg:max-w-[911px] xl:mt-[9.313rem]">
            <div className="text-center text-dark-slate-blue mb-[2.5rem]">
                <h2 className="font-medium tracking-[-0.075px] leading-[3.25rem] text-[1.5rem]">
                    Download the extension
                </h2>
                <p className="opacity-50 text-[.938rem] leading-[1.5rem] px-8 lg:max-w-[540px] lg:mx-auto">
                    We've got more browsers in the pipeline. Please
                    do let us know if you've got a favourite you'd
                    like us to prioritize.
                </p>
            </div>
            <div className="flex flex-col gap-[2.5rem] xl:gap-[2.125rem] px-12 lg:px-0 lg:flex-row lg:items-center">
                {Data.map((data, index) => (
                    <ExtensionData key={index} data={data} index={index}/>
                ))}
            </div>
        </section>
    )
}

export default Extensions