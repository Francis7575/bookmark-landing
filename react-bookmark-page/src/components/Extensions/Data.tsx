import firefoxLogo from '/assets/logo-firefox.svg'
import chromeLogo from '/assets/logo-chrome.svg'
import operaLogo from '/assets/logo-opera.svg'

type Extensions = {
    image: string,
    title: string,
    versionInfo: string,
    link: string,
    alt: string
}

type ExtensionsProps = {
    data: Extensions,
    index: number
}

const Data: Extensions[] = [
    {
        image: chromeLogo,
        title: 'Add to Chrome',
        versionInfo: 'Minimum version 62',
        link: 'Add & Install Extension',
        alt: 'Chrome'
    },
    {
        image: firefoxLogo,
        title: 'Add to Firefox',
        versionInfo: 'Minimum version 55',
        link: 'Add & Install Extension',
        alt: 'Firefox'
    },
    {
        image: operaLogo,
        title: 'Add to Opera',
        versionInfo: 'Minimum version 46',
        link: 'Add & Install Extension',
        alt: 'Opera'
    },
]


const ExtensionData = ({ data, index }: ExtensionsProps) => {
    return (
        <div className={`bg-white shadow-extensions-container rounded-[.938rem] pt-12 pb-[1.5rem] 
            lg:max-w-[280px] lg:w-full ${index === 1 && 'translate-y-10'} ${index === 2 && 'translate-y-20'}`}>
            <div className='flex flex-col items-center'>
                <img
                    src={data.image}
                    alt={data.alt} />
                <h3 className='mt-8 font-medium tracking-[0.25px] text-[1.25rem] text-dark-slate-blue'>
                    {data.title}
                </h3>
                <p className='text-dark-slate-blue text-[.938rem] leading-[1.75rem] opacity-50'>
                    {data.versionInfo}
                </p>
                <a href="#"
                    className='mt-[3.75rem] bg-blue text-white rounded-[.313rem] shadow-links py-[.625rem] 
                    px-[2.18rem] text-[.875rem] hover:text-blue hover:bg-white border-2 border-blue 
                    transition duration-400 ease-in-out'>
                    {data.link}
                </a>
            </div>
        </div>
    )
}

export { ExtensionData, Data }