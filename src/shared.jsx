import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  X,
  Menu,
  MoveUpRight,
  Layers,
  Cog,
  Wrench,
  ScanLine,
  MapPin,
  MessageCircle,
  Mail,
  Phone,
  Zap,
  Shield,
  Truck,
  Sun,
  Play,
  Maximize2,
  ExternalLink,
} from "lucide-react";
import { concepts, faqs } from "./data";
const icons = {
  "arrow-up-right": ArrowUpRight,
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  plus: Plus,
  minus: Minus,
  check: Check,
  x: X,
  menu: Menu,
  layers: Layers,
  cog: Cog,
  wrench: Wrench,
  "scan-line": ScanLine,
  pin: MapPin,
  message: MessageCircle,
  mail: Mail,
  phone: Phone,
  zap: Zap,
  shield: Shield,
  truck: Truck,
  sun: Sun,
  play: Play,
};
export function Icon({ name, size = 20, ...props }) {
  const I = icons[name] || ArrowUpRight;
  return <I size={size} strokeWidth={1.6} aria-hidden="true" {...props} />;
}
export function Logo({ light = false, mark = false }) {
  return (
    <img
      className={mark ? "brand-mark" : "brand-logo"}
      src={`/brand/assets/logo/svg/RSL_Logo_${mark ? "Bildmarke" : "Horizontal"}_${light ? "Negativ" : "Positiv"}.svg`}
      alt="Rhein-Sieg Lasertechnik"
    />
  );
}
export function Photo({
  src = "laser-metal.webp",
  alt = "KI-generiertes Beispiel einer Laserreinigung an einem Metallbauteil",
  className = "",
  ...props
}) {
  return (
    <img className={className} src={`/images/${src}`} alt={alt} {...props} />
  );
}
export function Label({ children }) {
  return <span className="eyebrow">{children}</span>;
}
export function Reveal({ children, className = "", ...props }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  );
}
export function NavLinks({ close }) {
  return (
    <>
      {[
        ["anwendungen", "Anwendungen"],
        ["verfahren", "Verfahren"],
        ["ueber-uns", "Über uns"],
        ["kontakt", "Kontakt"],
      ].map(([id, t]) => (
        <a key={id} href={`#${id}`} onClick={close}>
          {t}
        </a>
      ))}
    </>
  );
}
export function MobileNav({ open, setOpen }) {
  return (
    <>
      <button
        className="mobile-toggle"
        aria-expanded={open}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "x" : "menu"} />
      </button>
      {open && (
        <nav className="mobile-panel" aria-label="Mobile Navigation">
          <NavLinks close={() => setOpen(false)} />
          <a href="#kontakt" onClick={() => setOpen(false)}>
            Reinigung anfragen <Icon />
          </a>
        </nav>
      )}
    </>
  );
}
export function FAQs() {
  return (
    <div className="faqs">
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Icon name="plus" />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function Team() {
  return (
    <div className="team-members">
      <div>
        <span className="person-initials">KB</span>
        <h3>Kevin-Fabian Bodewig</h3>
        <p>Ausführung der Reinigungsarbeiten</p>
      </div>
      <div>
        <span className="person-initials">SF</span>
        <h3>Sarah Fielenbach</h3>
        <p>Verwaltung & Backoffice</p>
      </div>
    </div>
  );
}
export function Contact({ prefix }) {
  const [soils, setSoils] = useState(["Rost"]);
  const [done, setDone] = useState(false);
  const [files, setFiles] = useState([]);
  const toggle = (s) =>
    setSoils((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  return (
    <div className="contact-layout">
      <div className="contact-intro">
        <Label>Der erste Schritt</Label>
        <h2>
          Was können wir
          <br />
          für Sie reinigen?
        </h2>
        <p>
          Was soll gereinigt werden? Beschreiben Sie das Material und die
          Verschmutzung. Fotos helfen bei der ersten Einschätzung.
        </p>
        <div className="contact-region">
          <Icon name="pin" />
          <span>
            Mobile Einsätze im Rhein-Sieg-Kreis.
            <br />
            <small>Weitere Regionen auf Anfrage.</small>
          </span>
        </div>
        <div className="contact-methods">
          <span>
            <Icon name="phone" /> Telefonnummer folgt
          </span>
          <span>
            <Icon name="mail" /> E-Mail-Adresse folgt
          </span>
        </div>
        <button
          className="whatsapp-placeholder"
          type="button"
          onClick={() =>
            document.getElementById(`${prefix}-contact-note`).showModal()
          }
          aria-label="Per WhatsApp schreiben"
        >
          <Icon name="message" />
        </button>
        <small className="preview-note">
          Testformular. Es werden keine Daten versendet.
        </small>
      </div>
      <div className="contact-card">
        {done ? (
          <div className="form-complete" role="status">
            <Icon name="check" size={40} />
            <h3>Ihre Eingaben wurden geprüft.</h3>
            <p>
              Dies ist ein Testformular. Ihre Angaben werden weder versendet
              noch gespeichert.
            </p>
            <button className="submit-btn" onClick={() => setDone(false)}>
              Anfrage bearbeiten <Icon name="arrow-right" />
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div className="form-row">
              <label>
                Ihr Name *
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Vor- und Nachname"
                />
              </label>
              <label>
                E-Mail *
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="name@unternehmen.de"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Unternehmen
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Optional"
                />
              </label>
              <label>
                Einsatzort *
                <input
                  required
                  name="place"
                  autoComplete="address-level2"
                  placeholder="Ort oder Postleitzahl"
                />
              </label>
            </div>
            <fieldset>
              <legend>Was möchten Sie entfernen?</legend>
              <div className="soil-chips">
                {["Rost", "Graffiti", "Lack / Farbe", "Sonstiges"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={soils.includes(s)}
                    onClick={() => toggle(s)}
                  >
                    {s}
                    {soils.includes(s) && <Icon name="check" size={14} />}
                  </button>
                ))}
              </div>
            </fieldset>
            <label>
              Ihr Vorhaben *
              <textarea
                required
                name="message"
                rows={3}
                placeholder="Material, Verschmutzung, ungefähre Fläche oder Stückzahl …"
              />
            </label>
            <label className="upload-label">
              <Icon name="plus" size={17} />
              {files.length
                ? `${files.length} Bild${files.length > 1 ? "er" : ""} ausgewählt`
                : "Fotos hinzufügen (optional)"}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files))}
              />
            </label>
            <label className="consent">
              <input type="checkbox" required />
              Ich habe verstanden, dass dies ein Demoformular ist und keine
              Anfrage übermittelt wird. *
            </label>
            <button className="submit-btn" type="submit">
              Reinigung anfragen <Icon name="arrow-up-right" />
            </button>
            <small>* Pflichtangaben · Nur lokale Vorschau</small>
          </form>
        )}
      </div>
      <dialog id={`${prefix}-contact-note`}>
        <button
          className="dialog-close"
          aria-label="Schließen"
          onClick={() =>
            document.getElementById(`${prefix}-contact-note`).close()
          }
        >
          <Icon name="x" />
        </button>
        <h3>Persönlicher Kontakt.</h3>
        <p>
          Die geschäftliche WhatsApp-Nummer steht noch nicht fest. Bis sie
          freigegeben ist, bleibt der Kontakt deaktiviert.
        </p>
      </dialog>
    </div>
  );
}
export function Footer({ light = false }) {
  const [legal, setLegal] = useState(null);
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a href="#top">
          <Logo light={light} />
        </a>
        <p>
          Mobile Laserreinigung
          <br />
          im Rhein-Sieg-Kreis.
        </p>
        <a href="#kontakt">
          Reinigung anfragen <Icon name="arrow-up-right" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Rhein-Sieg Lasertechnik GbR</span>
        <span>Kevin-Fabian Bodewig & Sarah Fielenbach</span>
        <div>
          <button onClick={() => setLegal("Impressum")}>Impressum</button>
          <button onClick={() => setLegal("Datenschutz")}>Datenschutz</button>
        </div>
      </div>
      {legal && (
        <div className="modal-backdrop" onClick={() => setLegal(null)}>
          <section
            className="legal-modal"
            role="dialog"
            aria-modal="true"
            aria-label={legal}
            tabIndex={-1}
            ref={(el) => el?.focus()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setLegal(null);
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              autoFocus
              aria-label="Schließen"
              onClick={() => setLegal(null)}
            >
              <Icon name="x" />
            </button>
            <h2>{legal}</h2>
            <p>
              Dies ist ein Website-Entwurf. Die vollständigen
              Unternehmensangaben und die rechtlichen Texte werden vor dem
              öffentlichen Start ergänzt.
            </p>
            <p>
              Das Testformular versendet und speichert keine Eingaben. Die
              Bilder wurden für den Entwurf erstellt. Sie zeigen keine
              Kundenaufträge.
            </p>
          </section>
        </div>
      )}
    </footer>
  );
}
export function DesignDock({ id }) {
  return (
    <aside className="design-dock" aria-label="Design wechseln">
      <a href="/" title="Zur Übersicht">
        <span className="dock-grid">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span>Übersicht</span>
      </a>
      <span className="dock-divider" />
      <select
        aria-label="Design auswählen"
        value={id}
        onChange={(e) => window.location.assign(`/design-${e.target.value}`)}
      >
        {concepts.map((c) => (
          <option value={c.id} key={c.id}>
            {c.id}: {c.reference}
          </option>
        ))}
      </select>
      <ChevronDown size={13} />
    </aside>
  );
}
