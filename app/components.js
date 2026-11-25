import { typeLabel } from './projectsData';

export const EMAIL = 'alex.fanning@outlook.com';
export const CV_URL = '/cv/Alex_Fanning_Graphic_Designer_CV.pdf';

export function SiteHeader({ back }) {
  return (
    <header className="topbar shell">
      <a className="brand" href="/">
        <strong>ALEX FANNING</strong>
        <span>PACKAGING &amp; GRAPHIC DESIGNER</span>
      </a>
      <nav>
        {back ? (
          <a href={back.href}>{back.label}</a>
        ) : (
          <>
            <a href="/#work">WORK</a>
            <a href="/#process">PROCESS</a>
            <a href="/#about">ABOUT</a>
            <a href={CV_URL} download className="navCta">CV ↓</a>
          </>
        )}
      </nav>
    </header>
  );
}

function Icon({ name }) {
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" />
        <line x1="7.2" y1="10" x2="7.2" y2="17" />
        <circle cx="7.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        <path d="M11.5 17v-4.2c0-1.6 1-2.6 2.4-2.6 1.4 0 2.3 1 2.3 2.6V17" />
        <line x1="11.5" y1="10" x2="11.5" y2="17" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footerInner">
        <div className="brand"><strong>ALEX FANNING</strong><span>PACKAGING &amp; GRAPHIC DESIGNER</span></div>
        <a className="footerMail" href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a>
        <div className="socials">
          <a href="https://www.linkedin.com/in/alex-fanning-graphic-designer-at-ivg-6bb681234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href="https://www.instagram.com/afdesign26/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
        </div>
      </div>
    </footer>
  );
}

export function ProjectCard({ p }) {
  const label = typeLabel(p.type);
  return (
    <a className="pack" href={`/projects/${p.slug}`} style={{ '--c': p.color, '--on': p.ink }}>
      <div className="packFace">
        <img src={p.card || p.thumb} alt={`${p.name} packaging`} loading="lazy" />
      </div>
      <div className="shelfBoard cardBoard" aria-hidden="true" />
      <div className="shelfTag">
        <span className="tagEyebrow">{p.eyebrow}</span>
        <strong>{p.name.toUpperCase()}</strong>
        {label && <span className={`tagType ${p.type}`}>{label}</span>}
      </div>
    </a>
  );
}

function chunk(list, n) {
  const rows = [];
  for (let i = 0; i < list.length; i += n) rows.push(list.slice(i, i + n));
  return rows;
}

export function Shelves({ projects }) {
  return (
    <div className="shelves">
      {chunk(projects, 3).map((row, i) => (
        <div className="shelfRow" key={i}>
          <div className="shelfItems">
            {row.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
          <div className="shelfBoard" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}
