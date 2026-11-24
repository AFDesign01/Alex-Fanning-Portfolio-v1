import { notFound } from 'next/navigation';
import { projects, typeLabel } from '../../projectsData';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Alex Fanning`,
    description: project.intro,
  };
}

function Paragraphs({ text }) {
  const list = Array.isArray(text) ? text : [text];
  return list.map((t) => <p key={t}>{t}</p>);
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  const [first, ...rest] = project.name.toUpperCase().split(' ');
  const label = typeLabel(project.type);
  const images = project.images || [{ src: project.image, alt: project.alt }];

  const facts = [
    ['CLIENT', project.client],
    ['YEAR', project.year],
    ['ROLE', project.role],
  ].filter(([, v]) => v);

  const story = [
    ['THE BRIEF', project.brief],
    ['APPROACH', project.approach],
    ['OUTCOME', project.outcome],
  ].filter(([, v]) => v && (!Array.isArray(v) || v.length));

  const hasDeliverables = project.deliverables && project.deliverables.length > 0;

  return (
    <main className="site projectPage">
      <header className="topbar shell">
        <a className="brand" href="/">
          <strong>ALEX FANNING</strong>
          <span>GRAPHIC DESIGNER</span>
        </a>
        <nav>
          <a href="/#work">← BACK TO WORK</a>
          <span className="dot" />
        </nav>
      </header>

      <section className="projectIntro shell">
        {label && <p className={`projectLabel ${project.type}`}>{label}</p>}
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{first} <span>{rest.join(' ')}</span></h1>
        <p className="intro">{project.intro}</p>
        {facts.length > 0 && (
          <dl className="caseFacts">
            {facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        )}
      </section>

      {(story.length > 0 || hasDeliverables) && (
        <section className="caseStudy shell">
          {story.map(([k, v]) => (
            <section key={k}>
              <h2>{k}</h2>
              <Paragraphs text={v} />
            </section>
          ))}
          {hasDeliverables && (
            <section>
              <h2>DELIVERABLES</h2>
              <ul>{project.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </section>
          )}
        </section>
      )}

      <section className="projectSheet shell">
        {images.map((img) => (
          <figure key={img.src}>
            <img src={img.src} alt={img.alt} />
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </section>

      <section className="projectFooterNav shell">
        <a className="outlineBtn" href="/#work">← BACK TO WORK</a>
      </section>

      <footer className="footer shell">
        <div className="brand"><strong>ALEX FANNING</strong><span>GRAPHIC DESIGNER</span></div>
        <a href="mailto:alex.fanning@outlook.com">EMAIL: ALEX.FANNING@OUTLOOK.COM</a>
      </footer>
    </main>
  );
}
