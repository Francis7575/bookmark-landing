import FeaturesTab from "./FeaturesTab/FeaturesTab"

const Features = () => {
    return (
        <section>
            <div className="text-center mb-[2.5rem] xl:mb-[4.5rem]">
                <h2 className="text-[1.5rem] leading-[3.25rem] tracking-[-0.075px] font-medium text-dark-slate-blue
                    xl:text-[2rem] xl:tracking-[-0.1px] xl:mb-4">
                    Features
                </h2>
                <p className="text-[.938rem] md:text-[1.125rem] leading-[1.5rem] text-dark-slate-blue opacity-50 px-8 max-w-[33.75rem] mx-auto">
                    Our aim is to make it quick and easy for you
                    to access your favourite websites. Your bookmarks
                    sync between your devices so you can access them
                    on the go.
                </p>
            </div>
            <FeaturesTab />
        </section>
    )
}

export default Features