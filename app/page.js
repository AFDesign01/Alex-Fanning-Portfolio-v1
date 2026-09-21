'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const projects = [
  { title: 'Packaging', kicker: 'Product design for a new generation.', cls: 'pack tall', href: '/projects/venom-vape', thumb: '/projects/venom-vape/venom-thumb.png' },
  { title: 'Web', kicker: 'Digital experiences that connect.', cls: 'web', href: '/projects/fresh', thumb: '/projects/fresh/fresh-thumb.png' },
  { title: 'Branding', kicker: 'Identities with purpose.', cls: 'brand', href: '/projects/vital-bloom', thumb: '/projects/vital-bloom/vital-bloom-thumb.png' },
];

const skills = [
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Adobe Photoshop', level: 85 },
  { name: 'Adobe InDesign', level: 88 },
  { name: 'Figma', level: 83 },
  { name: 'Blender', level: 85 },
  { name: 'Creativity', level: 100 },
];

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function Art({ href, children, ...props }) {
  return href ? <a href={href} {...props}>{children}</a> : <div {...props}>{children}</div>;
}

function Icon({ name }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" />
          <line x1="7.2" y1="10" x2="7.2" y2="17" />
          <circle cx="7.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
          <path d="M11.5 17v-4.2c0-1.6 1-2.6 2.4-2.6 1.4 0 2.3 1 2.3 2.6V17" />
          <line x1="11.5" y1="10" x2="11.5" y2="17" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
          <circle cx="12" cy="12" r="4.6" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M4 9.3c4.8 1.6 10.8 1.7 15.6.3" />
          <path d="M5.2 17.6c2.6-4.6 6-8.6 9.7-11.6" />
          <path d="M9.6 3.1c4.2 4.8 6.6 10.7 6.9 17.2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  const [mouse, setMouse] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);


  return (
    <main
      className="site"
      style={{ '--mx': `${mouse.x}%`, '--my': `${mouse.y}%` }}
    >
      <div className="cursorGlow" aria-hidden="true" />

      <header className="topbar shell">
        <a className="brand" href="#top">
          <strong>ALEX FANNING</strong>
          <span>GRAPHIC DESIGNER</span>
        </a>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="/projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <span className="dot" />
        </nav>
      </header>

      <section className="hero shell" id="top">
        <Reveal>
          <p className="eyebrow">IDEAS / DESIGN / IMPACT</p>
          <h1>
            PACKAGING<br />
            <span>WEB</span><br />
            BRANDING
          </h1>
          <p className="intro">Years of experience working with FMCG brands to deliver designs that sell.</p>
          <a href="#work" className="outlineBtn">VIEW MY WORK <span>→</span></a>
        </Reveal>

        <motion.div
          className="portraitCard"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="portraitPlaceholder">
            <img className="portraitImg" src="/images/alex-portrait.png" alt="Alex Fanning" />
            <div className="signature">Alex Fanning</div>
          </div>
          <div className="portraitMeta">GRAPHIC DESIGNER<br />BASED IN THE UK</div>
        </motion.div>
      </section>

      <Reveal>
        <div className="nameBanner">
          <h2>ALEX FANNING</h2>
        </div>
      </Reveal>

      <section className="about shell section" id="about">
        <Reveal>
          <div className="sectionNum">01<i /></div>
          <h2>ABOUT ME</h2>
          <p>I’m Alex Fanning, a graphic designer specialising in packaging design, UI/UX design, web design and branding. I help brands bring ideas to life through bold, strategic and engaging design.</p>
          <p>With a strong interest in how design shapes perception, I create work that doesn’t just look good, but makes an impact.</p>
          <a href="#contact" className="outlineBtn small">MORE ABOUT ME <span>→</span></a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="facts">
            <div><h3>EDUCATION</h3><p>Bachelor’s Degree<br/>Graphic Design</p></div>
            <div><h3>EXPERIENCE</h3><p>Design projects across branding, packaging, web and digital</p></div>
            <div><h3>WHAT I CAN OFFER</h3><p>Brand identity<br/>Packaging design<br/>UI/UX design<br/>Web design<br/>Creative direction</p></div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <blockquote>GOOD<br/>DESIGN<br/>BUILDS<br/><span>STRONGER<br/>BRANDS.</span></blockquote>
        </Reveal>
      </section>

      <section className="skills shell section" id="skills">
        <Reveal>
          <div className="sectionNum">02<i /></div>
          <h2>SKILLS</h2>
          <p className="skillsIntro">Tools and abilities I bring to every project.</p>
        </Reveal>

        <div className="skillsGrid">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="skillRow">
                <div className="skillHead">
                  <span className="skillName">{s.name}</span>
                  <span className="skillPercent">{s.level}%</span>
                </div>
                <div className="skillBar">
                  <motion.div
                    className="skillFill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, delay: i * 0.06, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="sectionHead">
          <div>
            <div className="sectionNum">03<i /></div>
            <h2>SELECTED WORK</h2>
          </div>
          <a href="/projects">SEE THE REST <span>→</span></a>
        </div>

        <div className="projectGrid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={`projectCard ${p.cls.includes('tall') ? 'span2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Art className={`projectArt ${p.cls}`} href={p.href}>
                <motion.div className="projectArtInner" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  {p.thumb && <img className="projectThumb" src={p.thumb} alt={`${p.title} project thumbnail`} />}
                </motion.div>
              </Art>
              <div className="projectMeta">
                <div><h3>{p.title.toUpperCase()}</h3><p>{p.kicker}</p></div>
                <a href={p.href || "#contact"} className="viewProject">VIEW PROJECT <span>→</span></a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact cv shell section" id="contact">
        <Reveal>
          <h2>WANT MY <span>CV?</span></h2>
          <a className="outlineBtn" href="/cv/alex-fanning-cv.pdf" download>DOWNLOAD MY CV <span>→</span></a>
        </Reveal>
      </section>

      <footer className="footer shell">
        <div className="brand"><strong>ALEX FANNING</strong><span>GRAPHIC DESIGNER</span></div>
        <a href="mailto:alex.fanning0201@gmail.com">EMAIL: ALEX.FANNING0201@GMAIL.COM</a>
        <span>TEL: +44 7368 460 380</span>
        <div className="socials">
          <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
          <a href="#" aria-label="Dribbble"><Icon name="dribbble" /></a>
        </div>
      </footer>
    </main>
  );
}
