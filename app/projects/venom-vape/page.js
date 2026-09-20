export const metadata = {
  title: 'Venom Vape — Alex Fanning',
  description: 'Venom Vape branding and packaging design by Alex Fanning.',
};

export default function VenomVapePage() {
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
        <p className="eyebrow">PACKAGING / BRANDING</p>
        <h1>VENOM <span>VAPE</span></h1>
        <p className="intro">Brand identity, typography, packaging, characters, web banner and point-of-sale posters for Venom — “Let the flavour sink in.”</p>
      </section>

      <section className="projectSheet shell">
        <img
          src="/projects/venom-vape/venom-full.webp"
          alt="Venom Vape project: logo, typography, packaging, bottles, range, characters, web banner and POS posters"
        />
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
