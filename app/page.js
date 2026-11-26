import { projects } from './projectsData';
import { SiteHeader, SiteFooter, Shelves, CV_URL } from './components';

export const metadata = {
  title: 'Alex Fanning — Packaging & Graphic Designer',
  description: 'Portfolio of Alex Fanning, a packaging and graphic designer taking FMCG packaging from first concept to print-ready artwork.',
};

const heroPacks = ['ivg-go-plus', 'ivg-galaxy-dual', 'fresh']
  .map((slug) => projects.find((p) => p.slug === slug))
  .map((p) => ({ ...p, tall: `/projects/${p.slug}/${{ 'ivg-go-plus': 'goplus', 'ivg-galaxy-dual': 'galaxy', fresh: 'fresh' }[p.slug]}-tall.webp` }))
  .filter(Boolean);

const steps = [
  { n: '01', title: 'Concept', text: 'Ideas and direction for the brand and the range, led from the first brief.' },
  { n: '02', title: 'Design', text: 'Packaging, digital assets and range systems built to stand out on shelf.' },
  { n: '03', title: 'Artwork', text: 'Print-ready artwork across every flavour and market, warnings and dielines included.' },
  { n: '04', title: 'Prepress', text: 'Printability checks and print-process advice, from my time as an Origination Controller.' },
];

const skillGroups = [
  { title: 'Design tools', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'] },
  { title: 'Print & production', items: ['Packaging artwork, concept to production', 'Prepress and printability checks', 'Advising clients on the print process'] },
  { title: '3D, motion & video', items: ['Blender', 'Adobe Dimension', 'Adobe Premiere Pro', 'Adobe Audition'] },
];

export default function HomePage() {
  return (
    <main className="site">
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">PACKAGING · BRANDING · PRINT</p>
          <h1>
            DESIGNS<br />
            THAT SELL<br />
            <span>OFF THE SHELF.</span>
          </h1>
          <p className="intro">Years of experience working with FMCG brands to deliver designs that sell, from the first concept to print-ready artwork. Currently Graphic Designer at I Vape Great.</p>
          <div className="heroBtns">
            <a href="#work" className="btn solid">SEE THE WORK <span>→</span></a>
            <a href={CV_URL} download className="btn">DOWNLOAD CV <span>↓</span></a>
          </div>
        </div>

        <div className="heroShelf" aria-hidden="true">
          <div className="heroPacks">
            {heroPacks.map((p, i) => (
              <a key={p.slug} href={`/projects/${p.slug}`} className={`heroPack hp${i}`} style={{ '--c': p.color }} tabIndex={-1}>
                <img src={p.tall} alt="" />
              </a>
            ))}
          </div>
          <div className="shelfBoard" />
          <div className="newTag"><span>NEW ON THE SHELF</span><strong>IVG GO PLUS</strong></div>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="sectionHead">
          <div>
            <p className="kicker">01 / SELECTED WORK</p>
            <h2>ON THE <span>SHELF</span></h2>
          </div>
          <a className="textLink" href="/projects">ALL PROJECTS →</a>
        </div>
        <Shelves projects={projects} />
      </section>

      <section className="process" id="process">
        <div className="shell">
          <p className="kicker">02 / HOW I WORK</p>
          <h2>FROM CONCEPT <span>TO PRINT</span></h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="marks">
                <span className="stepNum">{s.n}</span>
                <h3>{s.title.toUpperCase()}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="aboutHead">
          <p className="kicker">03 / ABOUT</p>
          <h2>HI, I’M <span>ALEX.</span></h2>
          <p className="aboutTag marks">PRESTON, UK<br />PACKAGING · BRANDING · PRINT</p>
        </div>
        <div className="aboutCopy">
          <p className="aboutLead">I’m a graphic designer based in Preston, specialising in packaging design, branding, web and UI. I help brands bring ideas to life through bold, strategic design, and I make sure it prints exactly as intended.</p>
          <div className="facts">
            <div>
              <h3>EXPERIENCE</h3>
              <p>Graphic Designer, I Vape Great (IVG)<br />Origination Controller (prepress), BrandIMS</p>
            </div>
            <div>
              <h3>EDUCATION</h3>
              <p>BA Graphic Design, 2:1<br />University of Central Lancashire</p>
            </div>
          </div>
          <div className="skillsGrid">
            {skillGroups.map((g) => (
              <div className="skillGroup" key={g.title}>
                <h3>{g.title.toUpperCase()}</h3>
                <ul>{g.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cvBand" id="contact">
        <div className="shell cvInner">
          <h2>LET’S MAKE SOMETHING<br />THAT <span>SELLS.</span></h2>
          <div className="heroBtns">
            <a className="btn solid inv" href={CV_URL} download>DOWNLOAD MY CV <span>↓</span></a>
            <a className="btn inv" href="mailto:alex.fanning@outlook.com">EMAIL ME <span>→</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
