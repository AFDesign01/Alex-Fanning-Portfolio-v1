import { projects } from '../projectsData';
import { SiteHeader, SiteFooter, Shelves } from '../components';

export const metadata = {
  title: 'All Projects — Alex Fanning',
  description: 'Packaging, branding and web design projects by Alex Fanning.',
};

export default function AllProjectsPage() {
  return (
    <main className="site">
      <SiteHeader back={{ href: '/', label: '← HOME' }} />

      <section className="pageIntro shell">
        <p className="kicker">EVERYTHING ON THE SHELF</p>
        <h1>ALL <span>PROJECTS</span></h1>
      </section>

      <section className="shell section tight">
        <Shelves projects={projects} />
      </section>

      <SiteFooter />
    </main>
  );
}
