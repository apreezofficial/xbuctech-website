import { Reveal } from "./Reveal";

const approachItems = [
  { title: "Secure", image: "https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6aa705c67b55c753b189a9d3_image-removebg-preview.png", alt: "Shield with padlock", text: "Identify risks, strengthen security controls, and help protect systems, applications, networks, and data." },
  { title: "Manage", image: "https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6aa706d714616b12a17984ef__25B02E4F-3E06-4EFC-AAB8-46878E997A13_-removebg-preview.png", alt: "Alarm clock", text: "Keep IT environments reliable, efficient, properly configured, and supported so businesses can focus on operations." },
  { title: "Innovate", image: "https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6aa7068037175f386ffa162a__7E2703AC-C48D-43DB-B3D4-F6BE87E687B6_-removebg-preview.png", alt: "Trophy with star", text: "Apply modern technology, automation, cloud solutions, and practical improvements to help organizations adapt and grow." },
];

export function Approach() {
  return <section className="approach shell" id="approach"><Reveal className="approach-intro"><p className="eyebrow">/ Our approach</p><h2>Because your<br /><em>technology matters.</em></h2><p className="approach-lede">Effective technology management and cybersecurity should work together, not operate as separate functions.</p></Reveal><div className="approach-grid">{approachItems.map((item, index) => <Reveal as="article" className="approach-card" delay={index * 100} key={item.title}><div className="approach-card-top"><span>0{index + 1}</span><div className="approach-icon"><img src={item.image} alt={item.alt} /></div></div><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div></section>;
}
