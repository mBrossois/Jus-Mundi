import caseGif from '~/assets/images/case_bg.gif'
import arrowIcon from '~/assets/images/arrow-icon.svg'
import moreContentIcon from '~/assets/images/morecontent_icon.svg'
import transparancyIcon from '~/assets/images/transparency_icon.svg'
import efficiencyIcon from '~/assets/images/efficency_icon.svg'

export const heroCards = [
    { hasShadow: true, level: 'primary', size: 'big', imageProps: {
        src: '/logo_icc.svg', height: 160, width: 320, alt: 'Logo ICC'
    } }, 
    { hasShadow: true, level: 'secondary', size: 'small', hasOpacity: true, imageProps: {
        src: '/logo_jm.svg', height: 40, width: 108, alt: 'Logo Jus Mundi'
    } }
]

export const heroCaseGif = {
    src: caseGif,
    alt: 'Moving cases'
}

export const heroTextBlock = {
    texts: [
        { type: 'h1', text: 'A Unique Partnership for the Publication of ICC Arbitration Awards' },
        { type: 'paragraph', size: 'big', text: 'The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC Arbitration Awards and related materials freely available to the global legal community.' },
    ],
    button: {
        text: "Access ICC Awards", to:"https://iccwbo.org/dispute-resolution/resources/publication-of-icc-arbitral-awards-jus-mundi-not-icc-publication/", type: 'primary', onTop: false, icon: {
            src: arrowIcon,
            height: 24,
            width: 24,
            alt: 'Icon arrow to right',
        }
    }
}

export const heroStripesOverlay = [
    { position: 'left top', orientation: 'horizontal' },
    { position: 'left bottom', orientation: 'vertical' },
    { position: 'right bottom', orientation: 'quarter-after-vertical', size: 'big' }
]

export const partnerQuoteSection = {
    texts: [
        { type: 'quote', text: 'Publicising  and  disseminating  information  about  arbitration  has  been  one  of  ICC’s commitments  since  its  creation  and  an  instrumental  factor  in  facilitating  the  development  of trade worldwide.' },
        { type: 'paragraph', hasNewline: true, isCentered: true , text: 'Note to the Parties and the Arbitral Tribunals \n on the Conduct of Arbitration under the ICC Rules of Arbitration' },
    ], 
    link: {
        text: "read the whole document", to:"https://iccwbo.org/dispute-resolution/resources/publication-of-icc-arbitral-awards-jus-mundi-not-icc-publication/", onTop: false
    }
}

export const partnerTitleSection = {
    texts: [
        { type: 'h1', text: 'Why this partnership?' },
        { type: 'paragraph', size: 'big', text: 'Throughout its 100-year history, ICC has brought global business together to support an international rules-based order, including the promotion of global trade and commerce through the work of the ICC International Court of Arbitration.' },
        { type: 'paragraph', size: 'big', text: 'ICC has partnered with Jus Mundi to provide full public access to all publishable ICC International Court of Arbitration awards and related documents made as of 1 January 2019' },
    ]
}

export const benefitsSection = [
    {
        texts: [
            { type: 'paragraph', size: 'big', isBold: true, text: 'More key arbitration content' },
            { type: 'paragraph', text: 'This unique partnership means you will have access to more key arbitration content to level up your arbitration research. ' }
        ],
        image: { 
            src: moreContentIcon,
            height: 48,
            width: 48,
            alt: 'Icon pages with plus icon'
        },
    },
    {
        texts: [
            { type: 'paragraph', size: 'big', isBold: true, text: 'More transparency' },
            { type: 'paragraph', text: 'You will appreciate the increase in transparency in arbitration!' }
        ],
        image: { 
            src: transparancyIcon,
            height: 48,
            width: 48,
            alt: 'Icon with open lock'
        },
    },
    {
        texts: [
            { type: 'paragraph', size: 'big', isBold: true, text: 'More efficiency' },
            { type: 'paragraph', text: 'Jus Mundi’s AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence.' }
        ],
        image: { 
            src: efficiencyIcon,
            height: 48,
            width: 48,
            alt: 'Icon speed meter'
        },
    }
]

export const newsFeedTitle = {
    texts: [
        { type: 'paragraph', font: 'lato', text: 'newsfeed' },
        { type: 'h2', text: 'ICC International Court of Arbitration News & Links' },
    ]
}

export const newsCards = [
{
    texts: { type: 'paragraph', isBold: true, text: 'Corsair becomes the latest airline to pilot ICC AOKpass' },
},
{
    texts: { type: 'paragraph', isBold: true, text: 'ICC warns EU vaccine export controls must be rolled back without delay' },
},
{
    texts: { type: 'paragraph', isBold: true, text: 'Eduardo Silva Romero talks of advancing diversity, scope of ICC Institute as new Chair' },
},
{
    texts: { type: 'paragraph', isBold: true, text: 'ICC/UNICEF: Funding shortfalls and supply chain challenges threaten equitable vaccine distribution' },
},
{
    texts: { type: 'paragraph', isBold: true, text: 'ICC Trading Thoughts with Karima-Catherine Goundiam, founder of B2beeMatch' },
},
{
    texts: { type: 'paragraph', isBold: true, text: 'Guest blog: Making arbitration work in a down market' },
}
]

export const arbitrationTeamsTitle = { type: 'paragraph', font: 'lato', isCentered: true, text: 'Trusted by the Best Arbitration Teams Worldwide' }

export const arbitrationLogos = [
    { alt: 'Logo dla piper', src: '/dla_piper'},
    { alt: 'Logo curtis', src: '/curtis'},
    { alt: 'Logo burford', src: '/burford'},
    { alt: 'Logo freshfields', src: '/freshfields'},
    { alt: 'Logo shearman', src: '/shearman'},
    { alt: 'Logo fcdo', src: '/fcdo'},
    { alt: 'Logo foley', src: '/foley'},
    { alt: 'Logo eversheds', src: '/evershed'},
    { alt: 'Logo mofa', src: '/mofa'},
    { alt: 'Logo dentons', src: '/dentons'},
    { alt: 'Logo three crowns', src: '/threecrowns'},
    { alt: 'Logo gibson-dunn', src: '/gibson-dunn'},
    
    ]