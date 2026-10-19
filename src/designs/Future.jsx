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
import "./future.css";
export default function Future() {
  const [menu, setMenu] = useState(false);
  const [power, setPower] = useState(true);
  return (
    <div className={`future ${power ? "lights-on" : "lights-off"}`} id="top">
      <header className="f-nav">
        <a href="#top">
          <Logo light mark />
          <span>
            Rhein-Sieg
            <br />
            <b>Lasertechnik</b>
          </span>
        </a>
        <nav>
          <NavLinks />
        </nav>
        <a className="f-small-btn" href="#kontakt">
          Reinigung anfragen
        </a>
        <MobileNav open={menu} setOpen={setMenu} />
      </header>
      <main>
        <section
          className="f-hero"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(
              "--pointer-x",
              (e.clientX - r.left) / r.width - 0.5,
            );
            e.currentTarget.style.setProperty(
              "--pointer-y",
              (e.clientY - r.top) / r.height - 0.5,
            );
          }}
        >
          <div className="f-aurora" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="f-grain" />
          <div className="f-hero-content">
            <div className="f-micro">
              <i /> MOBILE LASERREINIGUNG
            </div>
            <h1>
              Reinigung mit Laser.
              <br />
              <span>Bei Ihnen vor Ort.</span>
            </h1>
            <p>
              Wir prüfen Rost und Beschichtungen an Ihren Oberflächen.
              <br />
              Für Betriebe im Rhein-Sieg-Kreis. Privatkunden sind ebenfalls
              willkommen.
            </p>
            <a className="f-glass-button" href="#kontakt">
              Reinigung anfragen <Icon name="arrow-right" size={16} />
            </a>
          </div>
          <button
            className="f-light-toggle"
            onClick={() => setPower(!power)}
            aria-pressed={power}
          >
            <Icon name="sun" size={14} />
            {power ? "Licht reduzieren" : "Licht aktivieren"}
          </button>
        </section>
        <section className="f-audience">
          <p>
            Für Werkstätten und Industriebetriebe.
            <br />
            <span>Auch einzelne Bauteile werden individuell beurteilt.</span>
          </p>
          <div>
            <span>INDUSTRIE</span>
            <span>HANDWERK</span>
            <span>INSTANDHALTUNG</span>
            <span>PRIVAT</span>
          </div>
        </section>
        <section id="verfahren" className="f-section">
          <Reveal className="f-heading">
            <Label>01 / So arbeitet der Laser</Label>
            <h2>
              Kurze Laserpulse
              <br />
              <span>tragen Schichten ab.</span>
            </h2>
            <p>
              Der Laser trifft auf die verschmutzte Oberfläche. Ob sich die
              Schicht abtragen lässt, hängt vom Material und der Verschmutzung
              ab.
            </p>
          </Reveal>
          <div className="f-bento">
            <Reveal className="f-bento-visual">
              <Photo />
              <div className="f-scanner" />
              <span>KI-GENERIERTES BEISPIEL</span>
              <div className="f-crosshair">+</div>
            </Reveal>
            <Reveal className="f-bento-spec">
              <Icon name="zap" size={28} />
              <h3>
                Vorgesehenes Gerät:
                <br />
                TPC-300W.
              </h3>
              <p>
                Für das Unternehmen ist ein TipTopLaser TPC-300W mit 300 Watt
                vorgesehen.
              </p>
              <div>
                <span>TECHNOLOGIE</span>
                <b>Gepulster Laser</b>
              </div>
              <div>
                <span>BEURTEILUNG</span>
                <b>Materialabhängig</b>
              </div>
            </Reveal>
            <Reveal className="f-bento-mobile">
              <Icon name="truck" size={26} />
              <h3>Wir kommen zu Ihnen.</h3>
              <p>
                Mobiler Einsatz im Rhein-Sieg-Kreis. Zugang und Voraussetzungen
                stimmen wir mit Ihnen ab.
              </p>
            </Reveal>
            <Reveal className="f-bento-check">
              <Icon name="shield" size={26} />
              <h3>Vorab an einer Probefläche prüfen.</h3>
              <p>
                Wir beurteilen den Untergrund und die Beschichtung. Bei Bedarf
                prüfen wir die Behandlung an einer Probefläche.
              </p>
            </Reveal>
          </div>
        </section>
        <section id="anwendungen" className="f-section f-apps">
          <div className="f-heading">
            <Label>02 / Geplante Anwendungen</Label>
            <h2>
              Was soll
              <br />
              <span>gereinigt werden?</span>
            </h2>
          </div>
          <div className="f-app-grid">
            {applications.map((a, i) => (
              <Reveal key={a.title}>
                <a href="#kontakt">
                  <span className="f-app-number">0{i + 1}</span>
                  <Icon name={a.icon} size={30} />
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="f-app-bottom">
                    Eignung anfragen <Icon size={18} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="f-footnote">
            Geplante Einsatzbereiche. Die konkrete Eignung und Umsetzbarkeit
            werden individuell geprüft.
          </p>
        </section>
        <section id="ablauf" className="f-section f-process">
          <Label>03 / Anfrage und Angebot</Label>
          <h2>
            So planen wir
            <br />
            <span>Ihren Auftrag.</span>
          </h2>
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
        <section id="ueber-uns" className="f-section f-about">
          <div>
            <Label>04 / Über uns</Label>
            <h2>
              Wir gründen
              <br />
              <span>Rhein-Sieg Lasertechnik.</span>
            </h2>
            <p>
              Kevin-Fabian Bodewig führt die Reinigung aus. Sarah Fielenbach
              übernimmt Verwaltung und Backoffice. Gemeinsam bauen wir das
              Unternehmen im Rhein-Sieg-Kreis auf.
            </p>
          </div>
          <Team />
        </section>
        <section className="f-section f-faq">
          <div>
            <Label>Häufige Fragen</Label>
            <h2>
              Was Sie vorab
              <br />
              <span>wissen sollten.</span>
            </h2>
          </div>
          <FAQs />
        </section>
        <section id="kontakt" className="f-section f-contact">
          <Contact prefix="f" />
        </section>
      </main>
      <Footer light />
    </div>
  );
}
