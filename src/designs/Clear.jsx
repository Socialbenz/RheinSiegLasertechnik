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
import "./clear.css";
export default function Clear() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="clear" id="top">
      <section className="c-hero">
        <Photo src="workshop.webp" className="c-hero-photo" />
        <div className="c-hero-shade" />
        <header className="c-header">
          <a href="#top">
            <Logo light />
          </a>
          <nav>
            <a href="#top">Start</a>
            <NavLinks />
          </nav>
          <a className="c-header-cta" href="#kontakt">
            Reinigung anfragen <Icon size={16} />
          </a>
          <MobileNav open={menu} setOpen={setMenu} />
        </header>
        <div className="c-hero-inner">
          <span className="c-overline">MOBILE LASERREINIGUNG</span>
          <h1>
            Laserreinigung
            <br />
            für Ihre
            <br />
            Oberflächen.
          </h1>
          <p>
            Wir beurteilen verschmutzte Oberflächen und planen die Reinigung bei
            Ihnen vor Ort. Das Verfahren arbeitet ohne chemische
            Reinigungsmittel.
          </p>
          <a className="c-button" href="#kontakt">
            Reinigung anfragen <Icon name="arrow-up-right" size={17} />
          </a>
          <div className="c-location">
            <Icon name="pin" size={17} />
            <span>Persönlich für Sie da. Im Rhein-Sieg-Kreis.</span>
          </div>
        </div>
        <div className="c-hero-caption">
          KI-generiertes Beispiel · keine Aufnahme eines Kundeneinsatzes
        </div>
        <a className="c-scroll" href="#einstieg" aria-label="Mehr entdecken">
          <Icon name="arrow-down" size={22} />
        </a>
      </section>
      <main>
        <section id="einstieg" className="c-intro">
          <Reveal>
            <Label>Rost und Beschichtungen</Label>
            <h2>
              Rost am Bauteil?
              <br />
              Wir prüfen die Reinigung.
            </h2>
          </Reveal>
          <Reveal>
            <p>
              Ein verrostetes Bauteil soll wieder eingebaut werden. Vorher muss
              die Oberfläche gereinigt werden. Laserreinigung kommt für
              geeignete Materialien und Verschmutzungen infrage.
            </p>
            <p>
              Schicken Sie uns eine Beschreibung und Bilder des Bauteils. Bei
              Bedarf vereinbaren wir eine Besichtigung oder testen eine
              Probefläche.
            </p>
            <a className="c-text-link" href="#verfahren">
              Das Verfahren kennenlernen <Icon name="arrow-right" size={18} />
            </a>
          </Reveal>
        </section>
        <section id="anwendungen" className="c-services">
          <div className="c-services-heading">
            <div>
              <Label>Geplante Anwendungen</Label>
              <h2>
                Anwendungen, die wir
                <br />
                vorab prüfen.
              </h2>
            </div>
            <p>
              Wir prüfen individuell, ob Laserreinigung der passende nächste
              Schritt ist.
            </p>
          </div>
          <div className="c-service-list">
            {applications.map((a, i) => (
              <Reveal className="c-service-row" key={a.title}>
                <span>0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <a href="#kontakt" aria-label={`${a.title} anfragen`}>
                  <Icon size={24} />
                </a>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="verfahren" className="c-method">
          <Reveal className="c-method-photo">
            <Photo />
            <span>KI-generiertes Beispiel</span>
          </Reveal>
          <Reveal className="c-method-copy">
            <Label>Das Verfahren</Label>
            <h2>
              Schichten abtragen
              <br />
              mit kurzen Laserpulsen.
            </h2>
            <p>
              Bei der Laserreinigung treffen kurze Pulse auf die Oberfläche und
              tragen geeignete Verschmutzungen oder Beschichtungen ab. Dafür
              werden keine chemischen Reinigungsmittel eingesetzt.
            </p>
            <div className="c-benefits">
              <div>
                <Icon name="truck" />
                <h3>Direkt bei Ihnen</h3>
                <p>Mobiler Einsatz nach Abstimmung.</p>
              </div>
              <div>
                <Icon name="scan-line" />
                <h3>Gezielt beurteilt</h3>
                <p>Material und Schicht entscheiden.</p>
              </div>
              <div>
                <Icon name="shield" />
                <h3>Vorab geprüft</h3>
                <p>Bei Bedarf an einer Probefläche.</p>
              </div>
            </div>
            <a className="c-button dark" href="#kontakt">
              Ihr Vorhaben besprechen <Icon />
            </a>
          </Reveal>
        </section>
        <section id="ablauf" className="c-process">
          <Reveal>
            <Label>So läuft Ihre Anfrage ab</Label>
            <h2>
              Sie beschreiben den Auftrag.
              <br />
              Wir prüfen den Aufwand.
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
        <section id="ueber-uns" className="c-about">
          <div>
            <Label>Das sind wir</Label>
            <h2>
              Zwei Ansprechpartner
              <br />
              für Ihren Auftrag.
            </h2>
            <p>
              Kevin-Fabian Bodewig ist für die Reinigungsarbeiten zuständig.
              Sarah Fielenbach übernimmt die Verwaltung. Das Unternehmen
              befindet sich im Aufbau.
            </p>
            <a className="c-text-link" href="#kontakt">
              Lernen wir uns kennen <Icon name="arrow-right" />
            </a>
          </div>
          <Team />
        </section>
        <section className="c-faq">
          <Label>Gut zu wissen</Label>
          <h2>
            Ihre Fragen zur
            <br />
            Laserreinigung.
          </h2>
          <FAQs />
        </section>
        <section id="kontakt" className="c-contact">
          <Contact prefix="c" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
