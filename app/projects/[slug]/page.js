import { notFound } from 'next/navigation';
import { projects } from '../../projectsData';

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

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  const [first, ...rest] = project.name.toUpperCase().split(' ');

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
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{first} <span>{rest.join(' ')}</span></h1>
        <p className="intro">{project.intro}</p>
      </section>

      <section className="projectSheet shell">
        <img src={project.image} alt={project.alt} />
      </section>

      <section className="projectFooterNav shell">
        <a className="outlineBtn" href="/#work">← BACK TO WORK</a>
      </section>

      <footer className="footer shell">
        <div className="brand"><strong>ALEX FANNING</strong><span>GRAPHIC DESIGNER</span></div>
        <a href="mailto:alex.fanning0201@gmail.com">EMAIL: ALEX.FANNING0201@GMAIL.COM</a>
        <span>TEL: +44 7368 460 380</span>
        <span />
      </footer>
    </main>
  );
}
