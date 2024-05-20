type Faqs = {
    question: string,
    answer: string,
}

type FaqsProps = {
    data: Faqs,
    isOpen: boolean,
    onClick: () => void,
    index: number
}

const Data: Faqs[] = [
    {
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic corrupti tenetur voluptate molestiae quam eos accusantium, in ducimus at itaque adipisci. Asperiores impedit magnam deleniti consectetur, libero odio maiores!',
    },
    {
        question: 'How can I request a new browser?',
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",

    },
    {
        question: 'Is there a mobile app?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur atque excepturi praesentium doloremque asperiores obcaecati consequuntur dolorum? Beatae, optio consequatur et asperiores consectetur ab dignissimos enim possimus, quasi obcaecati ipsa dicta, vel autem ratione odit pariatur. Doloribus, vel sed?",
    },
    {
        question: 'What about other Chromium browsers?',
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aut quidem deserunt fugit consequuntur sequi autem delectus officia temporibus quibusdam, similique culpa dolores, mollitia id neque deleniti earum modi iste nobis illum, error alias necessitatibus suscipit dolorem? Quo necessitatibus dolor ex rerum repellendus nobis rem.",
    },
]

const FaqsData = ({ data, isOpen, onClick, index }: FaqsProps) => {

    return (
        <div className='px-8 list-none'>
            <button
                className={`w-full flex items-center relative cursor-pointer border-b border-dark-slate-blue-15 
                pb-[.75rem] ${index === 0 ? 'pt-0' : 'pt-[1.25rem]'}`}
                onClick={onClick}
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-controls={`faq-answer-${index}`}
            >
                <span className='text-dark-slate-blue hover:text-light-red leading-[2rem] text-[.938rem] lg:text-[1.125rem]'>
                    {data.question}
                </span>
                <svg
                    className={`absolute right-0 transition-transform duration-500 
                    ${isOpen ? 'stroke-light-red' : 'stroke-blue'}`}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path 3" d="M2 2L10 10L18 2" strokeWidth="3" />
                </svg>
            </button>
            <article id={`faq-answer-${index}`}
                className={`accordion-panel ${isOpen ? 'open my-[1.625rem]' : ''}`}>
                <p className='text-dark-slate-blue opacity-75 tracking-[0.141px] leading-[1.875rem]'>
                    {data.answer}
                </p>
            </article>
        </div>
    )
}

export { FaqsData, Data }

