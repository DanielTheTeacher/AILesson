
import React, { useState } from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.tsx';
import { SectionTitle } from '../ui/SectionTitle.tsx';
import { Reference } from '../../types.ts';

const ALL_REFERENCES: Reference[] = [
  {
    id: "ref-1",
    content: (
      <>Cloudinary. (n.d.). <em>Six Ways to Use AI in Video Streaming</em>. Retrieved from <a href="https://cloudinary.com/guides/ai/six-ways-to-use-ai-in-video-streaming" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">cloudinary.com</a>; Tealium. (n.d.). <em>Complete Guide to AI-Based Recommendations</em>. Retrieved from <a href="https://tealium.com/blog/artificial-intelligence-ai/complete-guide-to-ai-based-recommendations-what-are-ai-based-recommendations-and-how-to-implement-them/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">tealium.com</a></>
    )
  },
  {
    id: "ref-2",
    content: (
      <>IBM. (n.d.). <em>What are AI hallucinations?</em> Retrieved from <a href="https://www.ibm.com/topics/ai-hallucinations" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">ibm.com</a>; Google Cloud. (n.d.). <em>What are AI hallucinations?</em> Retrieved from <a href="https://cloud.google.com/discover/what-are-ai-hallucinations" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">cloud.google.com</a></>
    )
  },
  {
    id: "ref-3",
    content: (
      <>IBM. (n.d.). <em>What is AI bias?</em> Retrieved from <a href="https://www.ibm.com/think/topics/ai-bias" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">ibm.com</a> (Covers pattern recognition and lack of understanding which is relevant to the point about how AI works, in addition to bias).</>
    )
  },
  {
    id: "ref-4",
    content: (
      <>We Are Social. (2024, May). <em>Five tips for navigating the AI effect on social media</em>. Retrieved from <a href="https://wearesocial.com/us/blog/2024/05/five-tips-for-navigating-the-ai-effect-on-social-media/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">wearesocial.com</a>; Socialinsider. (n.d.). <em>AI in Social Media</em>. Retrieved from <a href="https://www.socialinsider.io/blog/ai-in-social-media/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">socialinsider.io</a></>
    )
  },
   {
    id: "ref-5",
    content: (
      <>Spaceship. (n.d.). <em>AI Spam Filtering</em>. Retrieved from <a href="https://www.spaceship.com/blog/ai-spam-filtering/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">spaceship.com</a>; EmailTree AI. (n.d.). <em>Evolution of Spam</em>. Retrieved from <a href="https://emailtree.ai/blog/evolution-of-spam/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">emailtree.ai</a></>
    )
  },
  {
    id: "ref-6",
    content: (
      <>Lumenalta. (n.d.). <em>Understanding AI Route Optimization</em>. Retrieved from <a href="https://lumenalta.com/insights/understanding-ai-route-optimization" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">lumenalta.com</a>; FarEye. (n.d.). <em>Route Optimization AI</em>. Retrieved from <a href="https://fareye.com/resources/blogs/route-optimization-ai-smart-routing-traffic-solution" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">fareye.com</a></>
    )
  },
  {
    id: "ref-7",
    content: (
      <>IBM. (n.d.). <em>What is AI bias?</em> Retrieved from <a href="https://www.ibm.com/think/topics/ai-bias" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">ibm.com</a> (General explanation of AI bias).</>
    )
  },
  {
    id: "ref-8",
    content: ( /*This was the AI fiction, actual citation is about who popularized it */
      <>Candy Buffets. (n.d.). <em>Who Invented the Chocolate Fountain?</em> Retrieved from <a href="https://candy-buffets.co.uk/who-invented-the-chocolate-fountain/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">candy-buffets.co.uk</a></>
    )
  },
  {
    id: "ref-9",
    content: (
      <>Smithsonian Magazine. (2022, June 21). <em>The Curious Case of Charles Osborne, Who Hiccuped for 68 Years Straight</em>. Retrieved from <a href="https://www.smithsonianmag.com/history/the-curious-case-of-charles-osborne-who-hiccuped-for-68-years-straight-180980232/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">smithsonianmag.com</a>; Chelsea News. (n.d.). <em>One Man Hiccuped for 68 Yrs</em>. Retrieved from <a href="https://www.chelseanewsny.com/news/one-man-hiccuped-for-68-yrs-doctors-cannot-explain-why-he-or-anyone-else-hiccups-BN4395102" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">chelseanewsny.com</a></>
    )
  },
  {
    id: "ref-10",
    content: (
      <>Britannica. (n.d.). <em>Emu War</em>. Retrieved from <a href="https://www.britannica.com/topic/Emu-War" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">britannica.com</a>; Wikipedia. (n.d.). <em>Emu War</em>. Retrieved from <a href="https://en.wikipedia.org/wiki/Emu_War" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">en.wikipedia.org</a></>
    )
  },
  {
    id: "ref-11",
    content: (
      <>Giedd, J. N. (2012). The Digital Revolution and Adolescent Brain Evolution. <em>Journal of Adolescent Health, 51</em>(2), 101-105. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3705203/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">doi:10.1016/j.jadohealth.2012.06.002</a></>
    )
  },
  {
    id: "ref-12",
    content: (
      <>Trøndelag Fylkeskommune. (n.d.). <em>Kunstig intelligens (KI) i skolene</em>. Retrieved from <a href="https://www.trondelagfylke.no/vare-tjenester/utdanning/kunstig-intelligens-ki-i-skolene/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">trondelagfylke.no</a>; Møre og Romsdal Fylkeskommune. (n.d.). <em>Kunstig intelligens i skolen</em>. Retrieved from <a href="https://mrfylke.no/Handlers/DownloadPrintPdf.ashx?url=%2F%2Fmrfylke.no%2Ftenester%2Fskole-og-opplaring%2Fopplaring-i-skole%2Fikt-og-elev-pc%2Fkunstig-intelligens-i-skolen%2F%3Fprint%3D1%26securelevel%3Dtoken&title=Kunstig%20intelligens%20i%20skolen&token=c2a702daab7a" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">mrfylke.no</a></>
    )
  },
  {
    id: "ref-13",
    content: (
      <>Center for Humane Technology. (n.d.). <em>The Attention Economy</em>. Retrieved from <a href="https://www.humanetech.com/youth/the-attention-economy" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">humanetech.com</a>; Spohr, D. (2024). The attention economy and the metaverse. <em>Technology in Society, 76</em>, 102428. <a href="https://www.tandfonline.com/doi/full/10.1080/09515089.2023.2202428" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">doi.org/10.1080/09515089.2023.2202428</a></>
    )
  },
   {
    id: "ref-14",
    content: ( /* Note: Ref 14 in original was same as 13, ensure it is distinct if intended or remove if duplicate */
      <>Center for Humane Technology. (n.d.). <em>The Attention Economy</em>. Retrieved from <a href="https://www.humanetech.com/youth/the-attention-economy" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">humanetech.com</a> (Further details on AI's role).</>
    )
  }
];


export const ReferencesSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open

  return (
    <section className="mb-12">
      <SectionTitle>References</SectionTitle>
      <InteractiveCard>
        <details open={isOpen} onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="text-lg font-semibold text-sky-800 cursor-pointer py-2 mb-2 border-b border-slate-200 focus:outline-none">
            View All References
          </summary>
          <ol className="list-decimal list-inside text-slate-700 space-y-2 text-sm leading-relaxed">
            {ALL_REFERENCES.map((ref, index) => (
              <li key={ref.id} id={ref.id} className="mb-1 break-words">
                {ref.content}
              </li>
            ))}
          </ol>
        </details>
      </InteractiveCard>
    </section>
  );
};