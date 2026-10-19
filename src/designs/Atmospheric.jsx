import React, { useState } from "react";
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
import "./atmospheric.css";
export default function Atmospheric() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="atmospheric" id="top">
      <header className="a-nav">
        <a href="#top">
          <Logo light />
        </a>
        <nav>
          <NavLinks />
        </nav>
        <a className="a-nav-cta" href="#kontakt">
          Reinigung anfragen <Icon size={15} />
        </a>
        <MobileNav open={menu} setOpen={setMenu} />
      </header>
      <main>
        <section className="a-hero">
          <div className="a-light-wall" aria-hidden="true">
            {Array.from({ length: 15 }, (_, i) => (
              <i key={i} style={{ "--i": i }} />
            ))}
          </div>
          <div className="a-hero-copy">
            <span className="a-pill">
              <i /> Mobile Laserreinigung im Rhein-Sieg-Kreis
            </span>
            <h1>
              Rost und Beschichtungen
              <br />
              mit Laser bearbeiten.
            </h1>
            <p>
              Wir prüfen, ob sich Ihre Oberfläche mit Laser reinigen lässt.
              <br />
              Ohne chemische Reinigungsmittel. Direkt bei Ihnen vor Ort.
            </p>
            <a className="a-button" href="#kontakt">
              Reinigung anfragen <Icon name="arrow-right" size={18} />
            </a>
          </div>
          <div className="a-demo">
            <div className="a-demo-top">
              <span>Laserreinigung an einem Metallbauteil.</span>
              <span>Lasertechnologie · mobil vor Ort</span>
            </div>
            <div className="a-demo-image">
              <Photo />
              <div className="a-demo-caption">
                <span>LASERREINIGUNG AN METALL</span>
                <a href="#verfahren" aria-label="Verfahren entdecken">
                  <Icon name="arrow-up-right" size={24} />
                </a>
              </div>
            </div>
            <div className="a-demo-bottom">
              <span>
                Reinigung direkt
                <br />
                <b>bei Ihnen vor Ort.</b>
              </span>
              <p>
                Rost auf Metall und alte Farbschichten gehören zu den geplanten
                Anwendungen. Vor dem Einsatz wird die Eignung geprüft.
              </p>
              <span className="image-note">KI-generiertes Beispiel</span>
            </div>
          </div>
        </section>
        <section className="a-trust">
          <p>
            Für Betriebe mit Reinigungsbedarf
            <br />
            <strong>und für Privatkunden.</strong>
          </p>
          <div>
            <span>INDUSTRIE & GEWERBE</span>
            <span>INSTANDHALTUNG</span>
            <span>PRIVATKUNDEN</span>
          </div>
        </section>
        <section id="anwendungen" className="a-section">
          <Reveal className="a-section-head">
            <Label>01 / Anwendungsbereiche</Label>
            <h2>
              Was möchten Sie
              <br />
              reinigen lassen?
            </h2>
            <p>
              Rost auf Stahl braucht eine andere Behandlung als Farbe auf Holz.
              <br />
              Wir prüfen den Untergrund vor der Bearbeitung.
            </p>
          </Reveal>
          <div className="a-application-panel">
            <div
              className="a-tabs"
              role="tablist"
              aria-label="Anwendungsbereiche"
            >
              {applications.map((a, i) => (
                <button
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`a-panel-${i}`}
                  id={`a-tab-${i}`}
                  key={a.title}
                  onClick={() => setActive(i)}
                >
                  {a.short}
                  <Icon name="arrow-up-right" size={17} />
                </button>
              ))}
            </div>
            <div
              className="a-tab-content"
              role="tabpanel"
              id={`a-panel-${active}`}
              aria-labelledby={`a-tab-${active}`}
            >
              <Photo className={`material-crop crop-${active}`} />
              <div>
                <Label>{applications[active].type}</Label>
                <h3>{applications[active].title}</h3>
                <p>{applications[active].desc}</p>
                <a href="#kontakt">
                  Eignung prüfen lassen <Icon size={17} />
                </a>
                <small>
                  Geplante Anwendung · Eignung nach individueller Prüfung.
                  <br />
                  Das Bild zeigt ein KI-generiertes Metallbeispiel.
                </small>
              </div>
            </div>
          </div>
        </section>
        <section id="verfahren" className="a-method">
          <Reveal>
            <Label>02 / Das Verfahren</Label>
            <h2>
              Reinigen mit
              <br />
              <span>Laserpulsen.</span>
            </h2>
            <p>
              Kurze Laserpulse tragen geeignete Schichten ab. Die Einstellungen
              werden auf das Material und die Verschmutzung abgestimmt.
            </p>
            <a className="a-button" href="#kontakt">
              Ihr Vorhaben besprechen <Icon name="arrow-right" />
            </a>
          </Reveal>
          <div
            className="a-pulse-graphic"
            aria-label="Schematische Darstellung: Licht trifft auf eine Oberfläche"
          >
            <div className="pulse-ring ring-one" />
            <div className="pulse-ring ring-two" />
            <div className="pulse-ray" />
            <div className="pulse-surface" />
            <span>LASERPULS AUF EINER OBERFLÄCHE</span>
            <small>Schematische Darstellung</small>
          </div>
        </section>
        <section id="ablauf" className="a-section a-steps">
          <Reveal className="a-section-head">
            <Label>03 / So läuft eine Anfrage ab</Label>
            <h2>
              So erhalten Sie
              <br />
              Ihr Angebot.
            </h2>
          </Reveal>
          <div>
            {steps.map(([t, d], i) => (
              <Reveal key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="ueber-uns" className="a-about">
          <Label>04 / Persönlich für Sie da</Label>
          <h2>
            Laserreinigung aus dem
            <br />
            Rhein-Sieg-Kreis.
          </h2>
          <p>
            Kevin-Fabian Bodewig übernimmt die Reinigungsarbeiten. Sarah
            Fielenbach kümmert sich um die Verwaltung. Wir gründen Rhein-Sieg
            Lasertechnik und beraten Sie zu geplanten Einsätzen.
          </p>
          <Team />
        </section>
        <section className="a-section a-faq">
          <h2>
            Ihre Fragen zur
            <br />
            Laserreinigung.
          </h2>
          <FAQs />
        </section>
        <section id="kontakt" className="a-contact">
          <Contact prefix="a" />
        </section>
      </main>
      <Footer light />
    </div>
  );
}
