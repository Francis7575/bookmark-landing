import illustrationTabOne from '/assets/illustration-features-tab-1.svg'
import illustrationTabTwo from '/assets/illustration-features-tab-2.svg'
import illustrationTabThree from '/assets/illustration-features-tab-3.svg'

type FeaturesTab = {
    title: string,
    image: string,
    heading: string,
    paragraph: string,
    link: string,
}

export const Data: FeaturesTab[] = [
    {
        title: 'Simple Bookmarking',
        image: illustrationTabOne,
        heading: 'Bookmark in one click',
        paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        link: 'More info',
    },
    {
        title: 'Speedy Searching',
        image: illustrationTabTwo,
        heading: 'Intelligent search',
        paragraph: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        link: 'More info',
    },
    {
        title: 'Easy sharing',
        image: illustrationTabThree,
        heading: 'Share your bookmarks',
        paragraph: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        link: 'More info',
    },
]

