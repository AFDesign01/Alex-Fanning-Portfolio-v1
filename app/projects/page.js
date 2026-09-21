import { projects } from '../projectsData';

export const metadata = {
  title: 'All Projects — Alex Fanning',
  description: 'A showcase of all of Alex Fanning’s packaging, branding and web design projects.',
};

export default function AllProjectsPage() {
  return (
    <main className="site projectPage">
      <header className="topbar shell">
        <a className="brand" href="/">
          <strong>ALEX FANNING</strong>
          <span>GRAPHIC DESIGNER</span>
        </a>
        <nav>
          <a href="/">← BACK HOME</a>
          <span className="dot" />
        </nav>
      </header>

      <section className="projectIntro shell">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>ALL <span>PROJECTS</span></h1>
      </section>

      <section className="allProjects shell">
        <div className="allGrid">
          {projects.map((p) => (
            <a key={p.slug} className="allThumb" href={`/projects/${p.slug}`} aria-label={p.name}>
              <img src={p.thumb} alt={`${p.name} project thumbnail`} />
            </a>
          ))}
        </div>
      </section>

      <div className="projectFooterNav shell" />

      <footer className="footer shell">
        <div className="brand"><strong>ALEX FANNING</strong><span>GRAPHIC DESIGNER</span></div>
        <a href="mailto:alex.fanning0201@gmail.com">EMAIL: ALEX.FANNING0201@GMAIL.COM</a>
        <span>TEL: +44 7368 460 380</span>
        <span />
      </footer>
    </main>
  );
}
