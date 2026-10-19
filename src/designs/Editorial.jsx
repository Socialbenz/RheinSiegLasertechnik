import React, { useState, useEffect } from "react";
import {
  Logo,
  Icon,
  Photo,
  Label,
  Reveal,
  NavLinks,
  MobileNav,
  FAQs,
  Team,
  Contact,
  Footer,
} from "../shared";
import { applications, steps } from "../data";
import "./editorial.css";
export default function Editorial() {
  const [menu, setMenu] = useState(false);
  const [gallery, setGallery] = useState(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        document
          .querySelector(".editorial")
          ?.style.setProperty(
            "--e-parallax",
            `${Math.min(window.scrollY * 0.13, 70)}px`,
          ),
      );
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="editorial" id="top">
      <div className="e-hero-shell">
        <section className="e-hero">
          <Photo src="editorial.webp" className="e-hero-photo" />
          <div className="e-hero-shade" />
          <header className="e-nav">
            <a href="#top">
              <Logo light />
            </a>
            <nav>
              <NavLinks />
            </nav>
            <a href="#kontakt" className="e-nav-btn">
              Sprechen wir darüber <Icon size={14} />
            </a>
            <MobileNav open={menu} setOpen={setMenu} />
          </header>
          <div className="e-hero-content">
            <span className="e-location">
              <span />
              Mobile Laserreinigung im Rhein-Sieg-Kreis.
            </span>
            <h1>
              Rost entfernen.
              <br />
              Oberflächen reinigen.
            </h1>
            <p>
              Wir planen die Laserreinigung bei Ihnen vor Ort.
              <br />
              Die Eignung Ihrer Oberfläche prüfen wir vorher.
            </p>
            <a className="e-button" href="#kontakt">
              Reinigung anfragen <Icon size={18} />
            </a>
          </div>
          <a className="e-hero-sticker" href="#verfahren">
            <Icon name="sun" size={30} />
            <span>
              Reinigung mit
              <br />
              <strong>Laserpulsen.</strong>
            </span>
            <Icon size={22} />
          </a>
          <span className="e-photo-note">KI-generiertes Beispiel</span>
        </section>
      </div>
      <main>
        <section className="e-intro">
          <Reveal>
            <span className="e-tiny">
              REINIGUNG OHNE CHEMISCHE REINIGUNGSMITTEL
            </span>
            <h2>
              Rost auf Metall.
              <br />
              Alte Farbe auf Holz.
              <br />
              <em>Wir prüfen, was sich reinigen lässt.</em>
            </h2>
          </Reveal>
          <div className="e-intro-cards">
            <Reveal className="e-story-card">
              <Label>Hallo, wir sind Rhein-Sieg Lasertechnik.</Label>
              <h3>
                Laserreinigung
                <br />
                in Ihrer Region.
              </h3>
              <p>
                Wir gründen Rhein-Sieg Lasertechnik. Geplant sind mobile
                Einsätze für Betriebe und Privatkunden im Rhein-Sieg-Kreis.
              </p>
              <a className="e-small-link" href="#ueber-uns">
                Die Menschen dahinter <Icon name="arrow-right" size={17} />
              </a>
            </Reveal>
            <Reveal className="e-value-card">
              <div className="e-line-art">
                <Icon name="sun" size={55} />
                <i />
                <i />
                <i />
              </div>
              <h3>Unsere Idee</h3>
              <p>
                Kurze Laserpulse sollen geeignete Verschmutzungen abtragen. Die
                Einstellungen werden auf das Material abgestimmt.
              </p>
            </Reveal>
            <Reveal className="e-value-card">
              <div className="e-line-art e-line-second">
                <Icon name="pin" size={55} />
                <i />
                <i />
              </div>
              <h3>Unser Einsatzgebiet</h3>
              <p>
                Wir planen Einsätze im Rhein-Sieg-Kreis. Für andere Regionen
                prüfen wir die Anfahrt auf Anfrage.
              </p>
            </Reveal>
          </div>
        </section>
        <section id="anwendungen" className="e-gallery-section">
          <div className="e-section-heading">
            <div>
              <span className="e-tiny">BEISPIELBILDER ZUR LASERREINIGUNG</span>
              <h2>
                Metall und weitere
                <br />
                Oberflächen.
              </h2>
            </div>
            <p>
              Die Bilder wurden für diesen Entwurf erstellt. Sie zeigen keine
              Kundenaufträge. Welche Materialien wir bearbeiten, wird vor dem
              Einsatz geprüft.
            </p>
          </div>
          <div className="e-gallery">
            <button
              className="e-gallery-large"
              onClick={() => setGallery("workshop.webp")}
            >
              <Photo src="workshop.webp" />
              <span>
                Laserreinigung an einem Bauteil <Icon name="plus" />
              </span>
            </button>
            <button
              className="e-gallery-tall"
              onClick={() => setGallery("laser-metal.webp")}
            >
              <Photo />
              <span>
                Rost und Metall <Icon name="plus" />
              </span>
            </button>
            <div className="e-gallery-quote">
              <span>01 / ROST & METALL</span>
              <h3>
                Stahlbauteile
                <br />
                vor der Bearbeitung.
              </h3>
              <a href="#kontakt">
                Was ist möglich? <Icon name="arrow-right" size={18} />
              </a>
            </div>
            <button
              className="e-gallery-wide"
              onClick={() => setGallery("materials.webp")}
            >
              <Photo
                src="materials.webp"
                alt="KI-generiertes Bild mit Stahl, Holz und Naturstein"
              />
              <span>
                Materialbeispiele <Icon name="plus" />
              </span>
            </button>
          </div>
        </section>
        <section id="verfahren" className="e-benefit">
          <Reveal className="e-benefit-title">
            <span className="e-tiny">DAS VERFAHREN</span>
            <h2>
              Laserreinigung
              <br />
              bei Ihnen vor Ort.
            </h2>
          </Reveal>
          <div className="e-benefit-cards">
            <Reveal>
              <Icon name="zap" size={35} />
              <h3>Ohne chemische Reiniger.</h3>
              <p>
                Kurze Laserpulse bearbeiten geeignete Schichten. Ohne chemische
                Reinigungsmittel.
              </p>
            </Reveal>
            <Reveal>
              <Icon name="truck" size={35} />
              <h3>Direkt bei Ihnen.</h3>
              <p>
                Bei geeigneten Bauteilen ist eine Reinigung im eingebauten
                Zustand möglich. Den Zugang und den Arbeitsbereich prüfen wir
                vorher.
              </p>
            </Reveal>
            <Reveal>
              <Icon name="scan-line" size={35} />
              <h3>Passend zum Material.</h3>
              <p>
                Jede Oberfläche ist anders. Deshalb beginnen wir mit einer
                individuellen Prüfung.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="e-services">
          <Label>Was möchten Sie reinigen?</Label>
          <div>
            {applications.map((a, i) => (
              <Reveal key={a.title}>
                <span>0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <a href="#kontakt" aria-label={`${a.title} anfragen`}>
                  <Icon />
                </a>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="ablauf" className="e-process">
          <div>
            <span className="e-tiny">SO BEGINNT UNSERE ZUSAMMENARBEIT</span>
            <h2>
              Was muss
              <br />
              gereinigt werden?
            </h2>
            <p>
              Beschreiben Sie das Material und die Verschmutzung. Danach
              besprechen wir den nächsten Schritt.
            </p>
            <a className="e-button" href="#kontakt">
              Reinigung anfragen <Icon />
            </a>
          </div>
          <div>
            {steps.map(([t, d], i) => (
              <Reveal key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="ueber-uns" className="e-about">
          <Reveal>
            <Label>Wir sind aus der Region.</Label>
            <h2>
              Kevin-Fabian Bodewig
              <br />
              und Sarah Fielenbach.
            </h2>
            <p>
              Kevin-Fabian Bodewig übernimmt die Reinigung. Sarah Fielenbach
              kümmert sich um Verwaltung und Backoffice. Wir bauen das
              Unternehmen im Rhein-Sieg-Kreis auf.
            </p>
          </Reveal>
          <Team />
        </section>
        <section className="e-faq">
          <h2>
            Was Sie noch
            <br />
            wissen möchten.
          </h2>
          <FAQs />
        </section>
        <section id="kontakt" className="e-contact">
          <Contact prefix="e" />
        </section>
      </main>
      <Footer light />
      {gallery && (
        <div
          className="e-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Illustrative Materialdarstellung"
          onClick={() => setGallery(null)}
          tabIndex={-1}
          ref={(el) => el?.focus()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setGallery(null);
          }}
        >
          <button
            autoFocus
            aria-label="Bild schließen"
            onClick={() => setGallery(null)}
          >
            <Icon name="x" />
          </button>
          <Photo src={gallery} />
          <p>KI-generiertes Beispiel · kein dokumentiertes Kundenprojekt</p>
        </div>
      )}
    </div>
  );
}
