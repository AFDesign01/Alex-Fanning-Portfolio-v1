import { notFound } from 'next/navigation';
import { projects, typeLabel } from '../../projectsData';
import { SiteHeader, SiteFooter } from '../../components';

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

const isDieline = (img) => /dieline/i.test(img.src);

export default function ProjectPage({ params }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
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
  const [first, ...rest] = project.name.toUpperCase().split(' ');

  return (
    <main className="site" style={{ '--c': project.color, '--on': project.ink }}>
      <SiteHeader back={{ href: '/#work', label: '← BACK TO WORK' }} />

      <section className="caseBand">
        <div className="shell">
          <div className="caseTags">
            {label && <span className="pill">{label}</span>}
            <span className="pill ghost">{project.eyebrow}</span>
          </div>
          <h1>{first} <span>{rest.join(' ')}</span></h1>
          <p className="caseIntro">{project.intro}</p>
          {facts.length > 0 && (
            <dl className="caseFacts">
              {facts.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          )}
        </div>
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

      {project.beforeAfter && (
        <section className="beforeAfter shell">
          {[project.beforeAfter.before, project.beforeAfter.after].map((img) => (
            <figure key={img.src}>
              <figcaption>{img.caption.toUpperCase()}</figcaption>
              <div className="marks"><img src={img.src} alt={img.alt} /></div>
            </figure>
          ))}
        </section>
      )}

      {project.sections && project.sections.map((sec) => (
        <section key={sec.title} className="caseSection shell">
          <h2>{sec.title}</h2>
          {sec.body && <Paragraphs text={sec.body} />}
          {sec.points && (
            <ol>
              {sec.points.map((pt) => {
                const dot = pt.indexOf('. ');
                return dot > 0 && dot < 60
                  ? <li key={pt}><strong>{pt.slice(0, dot + 1)}</strong> {pt.slice(dot + 2)}</li>
                  : <li key={pt}>{pt}</li>;
              })}
            </ol>
          )}
        </section>
      ))}

      <section className="projectSheet shell">
        {images.map((img) => (
          <figure key={img.src} className={isDieline(img) ? 'dieline' : ''}>
            {isDieline(img) ? (
              <div className="marks"><img src={img.src} alt={img.alt} /></div>
            ) : (
              <img src={img.src} alt={img.alt} />
            )}
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </section>

      <a className="nextProject" href={`/projects/${next.slug}`} style={{ '--c': next.color, '--on': next.ink }}>
        <div className="shell nextInner">
          <span>NEXT ON THE SHELF</span>
          <strong>{next.name.toUpperCase()} →</strong>
        </div>
      </a>

      <SiteFooter />
    </main>
  );
}
