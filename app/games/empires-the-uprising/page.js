import { SiteHeader, SiteFooter } from '../../components';

export const metadata = {
  title: 'Empires The Uprising (Coming Soon) — Alex Fanning',
  description: 'Game design project by Alex Fanning. Case study coming soon.',
  robots: { index: false },
};

// PLACEHOLDER PAGE. Every [bracketed] line and every dashed box is a stand-in.
// Swap each Slot for a real <img> or <video> once the assets are gathered.

function Slot({ kind = 'IMAGE', title, spec, note, ratio = '16/9' }) {
  return (
    <figure className="slot">
      <div className={`slotBox ${kind === 'VIDEO' ? 'isVideo' : ''}`} style={{ aspectRatio: ratio }}>
        <span className="slotKind">{kind}</span>
        {kind === 'VIDEO' && <span className="slotPlay" aria-hidden="true">▶</span>}
        <strong>{title}</strong>
        <span className="slotSpec">{spec}</span>
      </div>
      {note && <figcaption>{note}</figcaption>}
    </figure>
  );
}

const facts = [
  ['GENRE', '[e.g. Real-time strategy]'],
  ['PLATFORM', '[e.g. PC]'],
  ['ENGINE', '[e.g. Unity / Unreal]'],
  ['MY ROLE', '[e.g. Game & UI designer]'],
  ['TEAM', '[Solo / team size]'],
  ['TIMELINE', '[e.g. 12 weeks, 2026]'],
];

const sections = [
  {
    n: '01',
    title: 'THE CONCEPT',
    text: '[One or two short paragraphs: the elevator pitch. What is Empires The Uprising, who is it for, and what makes it different? Finish with the one-line hook.]',
    slots: [
      { title: 'Key art / title screen', spec: '1920 × 1080 PNG or JPG', note: 'The single best image of the game. This also becomes the shelf thumbnail.' },
    ],
  },
  {
    n: '02',
    title: 'CORE GAMEPLAY LOOP',
    text: '[Explain what the player does minute to minute, e.g. gather → build → defend → expand. Keep it to 3–5 steps.]',
    slots: [
      { title: 'Gameplay loop diagram', spec: '1600 × 900, exported from Illustrator or Figma', note: 'A simple flow diagram of the loop. Recruiters love seeing design thinking drawn out.' },
      { kind: 'VIDEO', title: 'Gameplay clip', spec: '15–30 sec · MP4 · 1080p · no audio needed', note: 'One short clip showing the loop in action. Keep it under 10 MB so the page stays fast.' },
    ],
  },
  {
    n: '03',
    title: 'WORLD & STORY',
    text: '[The setting, the conflict and the factions in a few sentences. What is the uprising, and who is rising against whom?]',
    grid: true,
    slots: [
      { title: 'Environment concept art', spec: '1600 × 900', ratio: '4/3' },
      { title: 'Faction / character sheet', spec: '1600 × 1200', ratio: '4/3' },
      { title: 'Moodboard', spec: '1600 × 1200', ratio: '4/3' },
    ],
  },
  {
    n: '04',
    title: 'LEVEL DESIGN',
    text: '[Walk through one level or map: the goal, the route the player takes, and one decision you made to improve the flow or difficulty.]',
    grid: true,
    slots: [
      { title: 'Top-down map / layout sketch', spec: '1600 × 1200', ratio: '4/3', note: 'Before: blockout or paper sketch.' },
      { title: 'Finished level screenshot', spec: '1600 × 1200', ratio: '4/3', note: 'After: the same area in the final build.' },
    ],
  },
  {
    n: '05',
    title: 'UI, HUD & BRANDING',
    text: '[This is where your graphic design background shines. Show the logo, the HUD, menus and icons, and explain the choices: readability, hierarchy, colour.]',
    grid: true,
    slots: [
      { title: 'Game logo', spec: 'Transparent PNG or SVG', ratio: '16/9' },
      { title: 'In-game HUD screenshot', spec: '1920 × 1080', ratio: '16/9' },
      { title: 'Menu screens / icon set', spec: '1920 × 1080', ratio: '16/9' },
    ],
  },
  {
    n: '06',
    title: 'PROCESS & ITERATION',
    text: '[Show how the game changed: early sketches, playtest feedback and what you changed because of it. One honest "this did not work, so I…" story goes a long way.]',
    grid: true,
    slots: [
      { title: 'Early sketches / paper prototype', spec: 'Photo or scan, 1600 × 1200', ratio: '4/3' },
      { title: 'Playtest notes or before/after', spec: '1600 × 1200', ratio: '4/3' },
    ],
  },
];

const checklist = {
  images: [
    'Key art / title screen (1920 × 1080)',
    'Gameplay loop diagram',
    '2–3 concept art pieces (environment, characters, moodboard)',
    'Level layout sketch + finished level screenshot',
    'Game logo (transparent PNG or SVG)',
    'HUD screenshot + menu screens or icon set',
    'Early sketches or paper prototype photos',
  ],
  videos: [
    'Trailer or showreel (60–90 sec, MP4, 1080p)',
    'Short gameplay loop clip (15–30 sec, MP4)',
  ],
  text: [
    'Genre, platform, engine, role, team, timeline',
    'Elevator pitch (2–3 sentences)',
    'Core loop in 3–5 steps',
    'World and factions (a short paragraph)',
    'One level design decision and why',
    'One thing you changed after playtesting',
    'What you learned / outcome',
  ],
};

export default function EmpiresPage() {
  return (
    <main className="site gamePage" style={{ '--c': '#2b2620', '--on': '#f3efe7' }}>
      <SiteHeader back={{ href: '/#games', label: '← BACK TO GAMES' }} />

      <section className="caseBand">
        <div className="shell">
          <div className="caseTags">
            <span className="pill">GAME DESIGN</span>
            <span className="pill ghost">COMING SOON</span>
          </div>
          <h1>EMPIRES <span>THE UPRISING</span></h1>
          <p className="caseIntro">[Short intro: one or two sentences that sum up the game and your role in it.]</p>
          <dl className="caseFacts">
            {facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="shell gameHero">
        <Slot kind="VIDEO" title="Trailer / showreel" spec="60–90 sec · MP4 · 1080p · under 25 MB" note="Lead with motion. A short trailer is the first thing a studio will watch." />
      </section>

      {sections.map((s) => (
        <section key={s.n} className="shell gameSection">
          <div className="gameSectionHead">
            <span className="stepNum">{s.n}</span>
            <h2>{s.title}</h2>
          </div>
          <p className="placeholderText">{s.text}</p>
          <div className={s.grid ? 'slotGrid' : 'slotStack'}>
            {s.slots.map((slot) => <Slot key={slot.title} {...slot} />)}
          </div>
        </section>
      ))}

      <section className="shell gameSection">
        <div className="gameSectionHead">
          <span className="stepNum">07</span>
          <h2>TOOLS & OUTCOME</h2>
        </div>
        <p className="placeholderText">[List the software used, then a short closing paragraph: what you learned, what you would do next, and a link to play it (itch.io, Steam or a build) if there is one.]</p>
      </section>

      <section className="gatherList">
        <div className="shell">
          <p className="kicker">FOR ALEX · REMOVE BEFORE LAUNCH</p>
          <h2>WHAT TO <span>GATHER</span></h2>
          <div className="gatherCols">
            {Object.entries(checklist).map(([k, items]) => (
              <div key={k}>
                <h3>{k.toUpperCase()}</h3>
                <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
