import React, { useState } from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
// Reference type removed

const ALL_REFERENCES = [ // Removed Reference[] type
  {
    id: "ref-1",
    content: (
      React.createElement(React.Fragment, null, 
        "Cloudinary. (n.d.). ", React.createElement('em', null, "Six Ways to Use AI in Video Streaming"), ". Retrieved from ", React.createElement('a', { href: "https://cloudinary.com/guides/ai/six-ways-to-use-ai-in-video-streaming", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "cloudinary.com"), 
        "; Tealium. (n.d.). ", React.createElement('em', null, "Complete Guide to AI-Based Recommendations"), ". Retrieved from ", React.createElement('a', { href: "https://tealium.com/blog/artificial-intelligence-ai/complete-guide-to-ai-based-recommendations-what-are-ai-based-recommendations-and-how-to-implement-them/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "tealium.com")
      )
    )
  },
  {
    id: "ref-2",
    content: (
      React.createElement(React.Fragment, null, 
        "IBM. (n.d.). ", React.createElement('em', null, "What are AI hallucinations?"), ". Retrieved from ", React.createElement('a', { href: "https://www.ibm.com/topics/ai-hallucinations", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "ibm.com"), 
        "; Google Cloud. (n.d.). ", React.createElement('em', null, "What are AI hallucinations?"), ". Retrieved from ", React.createElement('a', { href: "https://cloud.google.com/discover/what-are-ai-hallucinations", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "cloud.google.com")
      )
    )
  },
  {
    id: "ref-3",
    content: (
      React.createElement(React.Fragment, null, 
        "IBM. (n.d.). ", React.createElement('em', null, "What is AI bias?"), ". Retrieved from ", React.createElement('a', { href: "https://www.ibm.com/think/topics/ai-bias", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "ibm.com"), " (Covers pattern recognition and lack of understanding which is relevant to the point about how AI works, in addition to bias)."
      )
    )
  },
  {
    id: "ref-4",
    content: (
      React.createElement(React.Fragment, null, 
        "We Are Social. (2024, May). ", React.createElement('em', null, "Five tips for navigating the AI effect on social media"), ". Retrieved from ", React.createElement('a', { href: "https://wearesocial.com/us/blog/2024/05/five-tips-for-navigating-the-ai-effect-on-social-media/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "wearesocial.com"), 
        "; Socialinsider. (n.d.). ", React.createElement('em', null, "AI in Social Media"), ". Retrieved from ", React.createElement('a', { href: "https://www.socialinsider.io/blog/ai-in-social-media/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "socialinsider.io")
      )
    )
  },
   {
    id: "ref-5",
    content: (
      React.createElement(React.Fragment, null, 
        "Spaceship. (n.d.). ", React.createElement('em', null, "AI Spam Filtering"), ". Retrieved from ", React.createElement('a', { href: "https://www.spaceship.com/blog/ai-spam-filtering/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "spaceship.com"), 
        "; EmailTree AI. (n.d.). ", React.createElement('em', null, "Evolution of Spam"), ". Retrieved from ", React.createElement('a', { href: "https://emailtree.ai/blog/evolution-of-spam/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "emailtree.ai")
      )
    )
  },
  {
    id: "ref-6",
    content: (
      React.createElement(React.Fragment, null, 
        "Lumenalta. (n.d.). ", React.createElement('em', null, "Understanding AI Route Optimization"), ". Retrieved from ", React.createElement('a', { href: "https://lumenalta.com/insights/understanding-ai-route-optimization", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "lumenalta.com"), 
        "; FarEye. (n.d.). ", React.createElement('em', null, "Route Optimization AI"), ". Retrieved from ", React.createElement('a', { href: "https://fareye.com/resources/blogs/route-optimization-ai-smart-routing-traffic-solution", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "fareye.com")
      )
    )
  },
  {
    id: "ref-7",
    content: (
      React.createElement(React.Fragment, null, 
        "IBM. (n.d.). ", React.createElement('em', null, "What is AI bias?"), ". Retrieved from ", React.createElement('a', { href: "https://www.ibm.com/think/topics/ai-bias", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "ibm.com"), " (General explanation of AI bias)."
      )
    )
  },
  {
    id: "ref-8",
    content: ( 
      React.createElement(React.Fragment, null, 
        "Candy Buffets. (n.d.). ", React.createElement('em', null, "Who Invented the Chocolate Fountain?"), ". Retrieved from ", React.createElement('a', { href: "https://candy-buffets.co.uk/who-invented-the-chocolate-fountain/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "candy-buffets.co.uk")
      )
    )
  },
  {
    id: "ref-9",
    content: (
      React.createElement(React.Fragment, null, 
        "Smithsonian Magazine. (2022, June 21). ", React.createElement('em', null, "The Curious Case of Charles Osborne, Who Hiccuped for 68 Years Straight"), ". Retrieved from ", React.createElement('a', { href: "https://www.smithsonianmag.com/history/the-curious-case-of-charles-osborne-who-hiccuped-for-68-years-straight-180980232/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "smithsonianmag.com"), 
        "; Chelsea News. (n.d.). ", React.createElement('em', null, "One Man Hiccuped for 68 Yrs"), ". Retrieved from ", React.createElement('a', { href: "https://www.chelseanewsny.com/news/one-man-hiccuped-for-68-yrs-doctors-cannot-explain-why-he-or-anyone-else-hiccups-BN4395102", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "chelseanewsny.com")
      )
    )
  },
  {
    id: "ref-10",
    content: (
      React.createElement(React.Fragment, null, 
        "Britannica. (n.d.). ", React.createElement('em', null, "Emu War"), ". Retrieved from ", React.createElement('a', { href: "https://www.britannica.com/topic/Emu-War", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "britannica.com"), 
        "; Wikipedia. (n.d.). ", React.createElement('em', null, "Emu War"), ". Retrieved from ", React.createElement('a', { href: "https://en.wikipedia.org/wiki/Emu_War", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "en.wikipedia.org")
      )
    )
  },
  {
    id: "ref-11",
    content: (
      React.createElement(React.Fragment, null, 
        "Giedd, J. N. (2012). The Digital Revolution and Adolescent Brain Evolution. ", React.createElement('em', null, "Journal of Adolescent Health, 51"), "(2), 101-105. ", React.createElement('a', { href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3705203/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "doi:10.1016/j.jadohealth.2012.06.002")
      )
    )
  },
  {
    id: "ref-12",
    content: (
      React.createElement(React.Fragment, null, 
        "Trøndelag Fylkeskommune. (n.d.). ", React.createElement('em', null, "Kunstig intelligens (KI) i skolene"), ". Retrieved from ", React.createElement('a', { href: "https://www.trondelagfylke.no/vare-tjenester/utdanning/kunstig-intelligens-ki-i-skolene/", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "trondelagfylke.no"), 
        "; Møre og Romsdal Fylkeskommune. (n.d.). ", React.createElement('em', null, "Kunstig intelligens i skolen"), ". Retrieved from ", React.createElement('a', { href: "https://mrfylke.no/Handlers/DownloadPrintPdf.ashx?url=%2F%2Fmrfylke.no%2Ftenester%2Fskole-og-opplaring%2Fopplaring-i-skole%2Fikt-og-elev-pc%2Fkunstig-intelligens-i-skolen%2F%3Fprint%3D1%26securelevel%3Dtoken&title=Kunstig%20intelligens%20i%20skolen&token=c2a702daab7a", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "mrfylke.no")
      )
    )
  },
  {
    id: "ref-13",
    content: (
      React.createElement(React.Fragment, null, 
        "Center for Humane Technology. (n.d.). ", React.createElement('em', null, "The Attention Economy"), ". Retrieved from ", React.createElement('a', { href: "https://www.humanetech.com/youth/the-attention-economy", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "humanetech.com"), 
        "; Spohr, D. (2024). The attention economy and the metaverse. ", React.createElement('em', null, "Technology in Society, 76"), ", 102428. ", React.createElement('a', { href: "https://www.tandfonline.com/doi/full/10.1080/09515089.2023.2202428", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "doi.org/10.1080/09515089.2023.2202428")
      )
    )
  },
   {
    id: "ref-14",
    content: ( 
      React.createElement(React.Fragment, null, 
        "Center for Humane Technology. (n.d.). ", React.createElement('em', null, "The Attention Economy"), ". Retrieved from ", React.createElement('a', { href: "https://www.humanetech.com/youth/the-attention-economy", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "humanetech.com"), " (Further details on AI's role)."
      )
    )
  }
];


export const ReferencesSection = () => { // Removed React.FC
  const [isOpen, setIsOpen] = useState(true);

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "References" }),
      React.createElement(InteractiveCard, {
        children: React.createElement('details', { 
            open: isOpen, 
            onToggle: (e) => setIsOpen(e.target.open) 
          } as any, // Cast to any to allow standard HTML attributes
          React.createElement('summary', { className: "text-lg font-semibold text-sky-800 cursor-pointer py-2 mb-2 border-b border-slate-200 focus:outline-none" },
            "View All References"
          ),
          React.createElement('ol', { className: "list-decimal list-inside text-slate-700 space-y-2 text-sm leading-relaxed" },
            ALL_REFERENCES.map((ref, index) => (
              React.createElement('li', { key: ref.id, id: ref.id, className: "mb-1 break-words" },
                ref.content
              )
            ))
          )
        )
      })
    )
  );
};