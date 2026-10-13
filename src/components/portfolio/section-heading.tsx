export function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow"><span className="text-primary">{number}</span><span className="eyebrow-line" />{eyebrow}</p><h2>{title}</h2></div>;
}
