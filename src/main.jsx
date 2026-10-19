import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { concepts } from "./data";
import { Logo, Icon, DesignDock, Reveal } from "./shared";
import Atmospheric from "./designs/Atmospheric";
import Future from "./designs/Future";
import Clear from "./designs/Clear";
import Editorial from "./designs/Editorial";

import "./global.css";
function Gallery() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <a href="/">
          <Logo />
        </a>
        <span>WEBSITE-ENTWÜRFE / 2026</span>
        <a href="#konzepte">
          Die Entwürfe <Icon name="arrow-down" size={16} />
        </a>
      </header>
      <main>
        <section className="gallery-intro">
          <div className="gallery-intro-top">
            <span className="presentation-label">
              <i /> RHEIN-SIEG LASERTECHNIK
            </span>
            <span>Vier neue Entwürfe und Ihre bisherige Testseite.</span>
          </div>
          <h1>
            So könnte Ihre
            <br />
            <span>Website aussehen.</span>
          </h1>
          <div className="gallery-intro-bottom">
            <p>
              Hier können Sie fünf Website-Entwürfe für Rhein-Sieg Lasertechnik
              vergleichen. Jede Seite lässt sich öffnen und ausprobieren.
            </p>
            <a href="#konzepte" className="gallery-explore">
              Entwürfe ansehen <Icon name="arrow-down" size={18} />
            </a>
          </div>
          <div className="gallery-meta">
            <span>ENTWÜRFE 01 BIS 05</span>
            <span>ZUM ÖFFNEN UND AUSPROBIEREN</span>
          </div>
        </section>
        <section id="konzepte" className="gallery-concepts">
          <div className="gallery-section-title">
            <span>Die fünf Entwürfe</span>
            <span>05 ENTWÜRFE</span>
          </div>
          {concepts.map((c) => (
            <Reveal key={c.id} className={`concept-card concept-${c.id}`}>
              <a
                href={`/design-${c.id}`}
                className="concept-preview"
                aria-label={`Design ${c.id} ${c.reference} öffnen`}
              >
                <img
                  src={`/previews/design-${c.id}.jpg`}
                  alt={`Tatsächliche Website-Vorschau: ${c.reference}`}
                  loading={c.id === "01" ? "eager" : "lazy"}
                />
                <span className="preview-open">
                  <Icon name="arrow-up-right" size={25} />
                </span>
                <span className="preview-badge">INTERAKTIVE VORSCHAU</span>
              </a>
              <div className="concept-info">
                <div className="concept-title">
                  <span>{c.id}</span>
                  <div>
                    <small>VORLAGE: {c.reference.toUpperCase()}</small>
                    <h2>{c.name}</h2>
                  </div>
                </div>
                <div className="concept-description">
                  <p>{c.description}</p>
                  <span>{c.mood}</span>
                </div>
                <a href={`/design-${c.id}`} className="concept-open">
                  Seite öffnen <Icon name="arrow-up-right" size={19} />
                </a>
              </div>
            </Reveal>
          ))}
        </section>
        <section className="gallery-outro">
          <span>IHRE AUSWAHL</span>
          <h2>
            Welcher Entwurf
            <br />
            gefällt Ihnen?
          </h2>
          <p>
            Notieren Sie sich, welche Gestaltung Ihnen gefällt und welche
            Abschnitte Sie ändern möchten.
          </p>
          <a href="#konzepte">
            Noch einmal vergleichen <Icon name="arrow-up-right" />
          </a>
        </section>
      </main>
      <footer className="gallery-footer">
        <Logo />
        <span>Rhein-Sieg Lasertechnik GbR · Website-Entwürfe 2026</span>
        <span>Die Formulare senden keine Daten.</span>
      </footer>
    </div>
  );
}
function App() {
  const match = window.location.pathname.match(/^\/design-(0[1-5])\/?$/);
  const id = match?.[1];
  const components = {
    "01": Atmospheric,
    "02": Future,
    "03": Clear,
    "04": Editorial,
  };
  const Page = components[id];
  useEffect(() => {
    document.title = id
      ? `${concepts[Number(id) - 1].reference} | Rhein-Sieg Lasertechnik`
      : "Website-Entwürfe für Rhein-Sieg Lasertechnik";
    document.documentElement.dataset.capture = new URLSearchParams(
      location.search,
    ).has("capture")
      ? "true"
      : "false";
  }, [id]);
  if (id === "05") {
    window.location.replace(
      "/original/index.html" + window.location.search + window.location.hash,
    );
    return null;
  }
  return Page ? (
    <>
      <a className="skip-link" href="#kontakt">
        Zum Anfragebereich
      </a>
      <Page />
      <DesignDock id={id} />
    </>
  ) : window.location.pathname === "/" ? (
    <Gallery />
  ) : (
    <div className="not-found">
      <Logo />
      <h1>Diese Seite wurde nicht gefunden.</h1>
      <a href="/">
        Zur Übersicht <Icon />
      </a>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
