
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.tsx';
import { SectionTitle } from '../ui/SectionTitle.tsx';
import { SubsectionTitle } from '../ui/SubsectionTitle.tsx';
import { Tooltip } from '../ui/Tooltip.tsx';
import { ResourceLink } from '../ui/ResourceLink.tsx';
import { CitationLink } from '../ui/CitationLink.tsx';
import { ListItem } from '../ui/ListItem.tsx';
import { EthicsTable } from '../shared/EthicsTable.tsx';
import { Vocation, VocationSpecificProps } from '../../types.ts';

export const AIHelperSection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {

  const getVocationSpecificOhmLawExample = () => {
    switch (selectedVocation) {
      case Vocation.Elektro:
        return "I've read about Ohm's Law but struggle to understand. Can you explain it simply for an apprentice in electrical trades, perhaps with an analogy related to water flow in pipes?";
      case Vocation.Helse:
        return "I'm learning about patient vital signs. Can you explain the normal ranges and what deviations might indicate, in simple terms for a healthcare assistant student?";
      case Vocation.Bygg:
        return "I'm studying different types of load-bearing structures. Can you explain the basic principles of tensile and compressive forces for a construction student, using examples like bridges or building frames?";
      default:
        return "I'm struggling with a concept from my studies. Can you explain it simply?";
    }
  };

  return (
    <section className="mb-12">
      <SectionTitle>3. AI as Helper: Use the Tools Smartly and Responsibly</SectionTitle>

      <InteractiveCard>
        <SubsectionTitle>The "You First" Principle: Your Brain, Then AI</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
          When you use AI for school, the most important rule is: <strong>You First!</strong> This means you must always start by using your own brain – your own thinking, planning, and initial effort – <em>before</em> you turn to AI.
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          Think of it this way: using AI to write your essays or solve all your problems is like using a forklift to lift weights at the gym. Sure, the forklift can lift heavy things easily, but <em>you</em> don't get any stronger. The whole point of lifting weights is to build <em>your own</em> muscles. Similarly, the point of doing schoolwork isn't just to get an answer or a finished product; it's to build your "mental muscles."
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          When you write an essay, for example, you're not just learning to write. You're learning much deeper skills: how to structure your thoughts, organize complex information, think critically about a topic, find evidence, and communicate your ideas clearly and persuasively. These are incredibly important skills for any job and for life in general. If AI does this heavy lifting for you, you miss out on developing these critical abilities.
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          Learning can sometimes feel a bit tough or "painful" – that's when your brain is really working hard and growing. It's often at these moments that it's most tempting to let AI take over. But remember the saying, "no pain, no gain." That struggle is actually what learning feels like. If you skip that struggle, you skip the learning.
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          Scientists have noticed that many teenagers today report feeling more stressed and perhaps less able to tackle difficulties. Some think this might be partly because technology, including AI, can remove many of the small challenges and hurdles that actually help us grow stronger and more resilient. Your brain is incredibly <Tooltip text="Able to change and adapt as a result of experience.">plastic</Tooltip> (able to change and adapt) when you're young – roughly until your early twenties.<CitationLink referenceId="ref-11" text="[11]" /> This is the prime time to build those fundamental thinking skills. If you rely too much on AI to do the thinking for you now, it can be much harder to develop these essential skills later in life.
        </p>
        <p className="text-slate-700 leading-relaxed">
          So, always start with your own effort. Once you've wrestled with the material yourself, then AI can be a useful tool to <Tooltip text="To assist or hold up.">support</Tooltip>, <Tooltip text="To make better.">improve</Tooltip>, or <Tooltip text="To make small changes to improve something.">refine</Tooltip> your work. But you do the core thinking first.
        </p>
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>AI for <Tooltip text="To add to or enhance something, making it better or more effective.">Augmentation</Tooltip> vs. Generation</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
          There's a big difference between using AI to augment your work and letting AI generate work for you.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-slate-700 leading-relaxed">
          <div className="bg-rose-50 p-4 rounded border border-rose-200">
            <h4 className="font-semibold text-rose-700 mb-1">Generation (Risky for Learning)</h4>
            <p className="text-sm">AI creates content or solutions almost entirely from scratch, often based on a simple command (prompt), without much prior effort from you. This is like letting the forklift do all the lifting – you don't build your own skills.</p>
            <p className="text-sm mt-1"><i>Example: "Write an essay about..."</i></p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-1">Augmentation (Good for Learning)</h4>
            <p className="text-sm">AI helps you, improves, or builds upon work you've already started or thought out. AI is a collaborator, helping you lift more after you've done your reps.</p>
            <p className="text-sm mt-1"><i>Example: "Here's a paragraph I wrote. Can you give feedback on clarity and grammar?"</i></p>
          </div>
        </div>
        <p className="text-slate-700 mt-3 leading-relaxed">
          In school and professional life, the focus should be on augmentation. AI can help you see new angles, improve what you'vecreated, or automate simple parts of a task, so you can focus on the more demanding and creative parts.
        </p>
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>Ethical Use: AI as a Learning Partner (with Norwegian Guidelines)</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">With the "You First" principle and your teacher's permission, AI can be a great learning partner. Here are some examples of ethical AI use:
          <ResourceLink href="https://ndla.no/r/engelsk-sf/presentation-sf/3f99192e37">Ethical AI Use (NDLA)</ResourceLink>
          <ResourceLink href="https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-ki-i-skolen/kunstig-intelligens-ki-i-skolen/">Norwegian AI Guidelines (Udir)</ResourceLink>
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-3 space-y-1 leading-relaxed">
          <ListItem><strong>Brainstorming (<em>after</em> your own effort!):</strong> This is key: <em>after</em> you have already thought deeply about your project and have your own initial ideas, you could ask AI: "I've thought about X, Y, Z for my project related to {selectedVocation}. Can you suggest some other angles or related concepts I might have missed?" Using AI before you've done your own thinking is like asking the forklift to decide which muscles you should train – it defeats the purpose.</ListItem>
          <ListItem><strong>Getting feedback on YOUR work:</strong> "Can you check this text I wrote for grammar mistakes?"</ListItem>
          <ListItem><strong>Explaining difficult topics (after your own effort):</strong> "{getVocationSpecificOhmLawExample()}"</ListItem>
          <ListItem><strong>Practicing skills:</strong> "Give me a scenario for a customer conversation where the customer is dissatisfied about an issue relevant to {selectedVocation}."</ListItem>
        </ul>
         <p className="text-slate-700 mb-2 font-semibold">Important in Norway:</p>
        <ul className="list-disc list-inside text-slate-700 mb-2 space-y-1 text-sm leading-relaxed">
          <ListItem><strong>AI as support, not replacement:</strong> AI should support learning, not replace your own work and critical thinking.</ListItem>
          <ListItem><strong>Be transparent:</strong> Be clear about when and how you've used AI.</ListItem>
          <ListItem><strong>Check facts:</strong> Information from AI must always be checked against reliable sources. Do not cite AI as a source.</ListItem>
          <ListItem><strong>Privacy:</strong> Don't share sensitive personal information or copyrighted material with AI tools, especially those not approved for GDPR (privacy regulations). Consider using tools like <strong>NDLA AI Chat</strong>, which is adapted to Norwegian privacy laws.<CitationLink referenceId="ref-12" text="[12]" /></ListItem>
        </ul>
        <p className="text-slate-700 leading-relaxed">Ethical use is about your intention and transparency. The goal must be to learn more and become better, not to avoid work.</p>
      </InteractiveCard>
      
      <InteractiveCard>
        <SubsectionTitle>Academic Integrity: What's NOT Okay? – Consequences of Cheating with AI</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">Using AI to do your work for you and presenting it as your own is considered cheating. Schools take this very seriously. The following information about what constitutes cheating with AI and its consequences is paraphrased and inspired by guidelines such as those from Vestfold Fylke (see <a href="https://www.vestfoldfylke.no/no/skoler/smi-skolen/meny/praktisk-info/regler-og-rettigheter/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Vestfold Fylke's rules</a>). Similar rules and consequences apply in Møre og Romsdal and other regions.</p>
        
        <h4 className="font-semibold text-slate-600 mt-4 mb-2">Hva regnes som juks og plagiat med KI?</h4>
        <p className="text-slate-700 mb-2 text-sm leading-relaxed">
          Juks med KI innebærer å presentere KI-generert arbeid som ditt eget, uten tillatelse eller uten å ha gjort en betydelig egeninnsats først. Dette inkluderer direkte avskrift eller omskrivinger fra KI uten kildehenvisning. Selv om KI kan være et nyttig verktøy for læring og refleksjon, er det juks hvis du bruker det til å unngå eget arbeid og presenterer resultatet som ditt.
        </p>
        <p className="text-slate-700 mt-2 mb-2 font-semibold">Reaksjoner ved juks og plagiat med KI (paraphrased from typical school guidelines):</p>
        <p className="text-slate-700 mb-2 text-sm leading-relaxed">
          Å jukse med KI kan få alvorlige følger, avhengig av hvor alvorlig det er og om det har skjedd før.
        </p>
        <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 leading-relaxed">
          <ListItem>Du kan få IV (Ikke Vurdert) på prøver, innleveringer, og i verste fall i standpunktkarakter i faget (jf. forskrift til opplæringsloven §§ 9-14, 9-17).</ListItem>
          <ListItem>Ved alvorlig eller gjentatt juks kan du få nedsatt karakter i orden og/eller oppførsel (jf. «skoleregler for elever, § 5-3»). Skolen vil da fatte et enkeltvedtak, og du (og foresatte hvis du er under 18) blir varslet og får forklare deg.</ListItem>
          <ListItem>Juks på eksamen kan føre til at eksamen blir annullert, og du mister også standpunktkarakteren i faget. Dette kan bety at du ikke får førstegangsvitnemål (jf. forskrift til opplæringsloven § 9-42).</ListItem>
        </ul>
         <p className="text-slate-700 mt-3 leading-relaxed">Hovedpoenget er: KI skal ikke erstatte din egen læring, kritiske tenkning eller kreativitet. Målet med skolen er at <strong>du</strong> skal lære og utvikle disse ferdighetene.</p>
      </InteractiveCard>

      <InteractiveCard id="ethicsTableActivity">
        <SubsectionTitle>AI Use: Green, Yellow, Red Light for School Assignments</SubsectionTitle>
        <EthicsTable />
      </InteractiveCard>
    </section>
  );
};