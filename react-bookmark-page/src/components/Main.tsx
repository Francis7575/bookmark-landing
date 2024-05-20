import Extensions from "./Extensions/Extensions"
import Features from "./Features/Features"
import SimpleBookmark from "./SimpleBookmark"
import FrequentlyAskedQuestions from './FAQs/FrequentlyQuestions'
import illustrationImage from '/assets/illustration-hero.svg'
import Form from './Form'

const SimpleBookmarkImage = () => {
    return (
        <main className="rectangle relative overflow-hidden">
            <section className="mb-[8.75rem] xl:mb-[11.313rem] md:mt-[7.93rem] md:flex md:flex-row-reverse md:items-center md:justify-between 
                    md:pl-8 md:pl-0 lg:px-16 xl:max-w-[69rem] xl:mx-auto xl:px-0">
                <div className="mt-[5rem] md:mt-0 flex md:justify-end">
                    <img src={illustrationImage} alt="" className="max-w-[310px] lg:max-w-[450px] xl:max-w-[574px] mx-auto" />
                </div>
                <SimpleBookmark />
            </section>
            <Features />
            <Extensions />
            <FrequentlyAskedQuestions />
            <Form />
        </main>
    )
}

export default SimpleBookmarkImage