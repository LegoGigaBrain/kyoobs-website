"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import KyoobsFooter from "./components/KyoobsFooter";
import KyoobsHeader from "./components/KyoobsHeader";

const websiteAsset = (file) => `/assets/website-elements/${file}`;
const manifestationAsset = (file) => `/assets/manifestation/${file}`;

export default function PreviousIterationPage() {
  const heroPanelRef = useRef(null);

  const previews = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        src: websiteAsset(`Kyoob-preview-${index + 1}.png`),
        label: `KYOOB ${String(index + 1).padStart(2, "0")}`
      })),
    []
  );

  function handleHeroPointerMove(event) {
    const panel = heroPanelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;
    panel.style.setProperty("--cursor-x", `${x}px`);
    panel.style.setProperty("--cursor-y", `${y}px`);
  }

  return (
    <main className="site-shell">
      <KyoobsHeader />
      <section className="home-grid" id="top">
        <article className="panel hero-panel" data-panel ref={heroPanelRef} onPointerMove={handleHeroPointerMove}>
          <div className="panel-number">01 / 06</div>
          <AnimatedGlyphField />
          <div className="hero-face-wrap">
            <img className="hero-face" src={websiteAsset("Hero-Kyoob.png")} alt="Hero Kyoob portrait" />
          </div>
          <div className="hero-copy">
            <h1>
              <span className="hero-line">WE EXIST</span>
              <br />
              <span className="hero-line">IN AN ABSTRACT</span>
              <br />
              <span className="hero-line">WORLD</span>
            </h1>
            <div className="hero-rule" aria-hidden="true" />
            <p>Kyoobs are human adjacent beings whose proportions obey another law.</p>
            <a className="text-link" href="/world-of-formation">
              ENTER THE WORLD
            </a>
          </div>
        </article>

        <article className="panel formation-preview" data-panel>
          <h2>THE WORLD OF FORMATION</h2>
          <p>A dimension of pure potential. Where identity assembles and meaning takes shape.</p>
          <div className="panel-action-row">
            <a className="text-link" href="/world-of-formation">
              EXPLORE -&gt;
            </a>
            <div className="panel-number">02 / 06</div>
          </div>
        </article>

        <article className="panel rationale-panel" data-panel>
          <div className="panel-number">03 / 06</div>
          <h2>KYOOBS MANIFESTO</h2>
          <div className="rationale-lines">
            <p>Reality is no longer singular.</p>
            <p>Formation precedes manifestation.</p>
            <p>We inherit fractured worlds.</p>
            <p>Reconstruction is the new creation.</p>
            <p>Perspective is architecture.</p>
            <p>Identity is assembled.</p>
            <p>I AM KYOOB</p>
          </div>
        </article>

        <div className="lower-panel-row" aria-label="KYOOBS lower panels">
          <article className="panel catalogue-panel" id="catalogue" data-panel>
            <div className="catalogue-marquee" aria-label="Preview Kyoobs carousel">
              <div className="catalogue-marquee-track">
                {[...previews, ...previews].map((preview, index) => (
                  <figure key={`${preview.src}-${index}`} className="catalogue-marquee-card" aria-hidden={index >= previews.length}>
                    <img src={preview.src} alt={index < previews.length ? preview.label : ""} />
                  </figure>
                ))}
              </div>
            </div>
            <div className="catalogue-copy">
              <span className="kicker">CATALOGUE</span>
              <h2>EXPLORE THE FORMATION</h2>
            </div>
            <div className="panel-action-row">
              <a className="text-link" href="/catalogue">
                VIEW COLLECTION -&gt;
              </a>
              <div className="panel-number">04 / 06</div>
            </div>
          </article>

          <article className="panel expression-panel" data-panel>
            <img src={manifestationAsset("interior-rug.png")} alt="Interior rug manifestation" />
            <div>
              <span className="kicker">WORLD OF EXPRESSION</span>
              <h2>FROM 2D TO REALITY</h2>
              <div className="panel-action-row">
                <a className="text-link" href="/manifestation">
                  PREVIEW -&gt;
                </a>
                <div className="panel-number">05 / 06</div>
              </div>
            </div>
          </article>

          <article className="panel about-panel" data-panel>
            <img src={websiteAsset("About-Kyoob-no-face.png")} alt="KYOOBS about portrait" />
            <div>
              <span className="kicker">ABOUT</span>
              <h2>EXPRESSIVE IDENTITY</h2>
              <p>Inspired by Cubist fragmentation and Ndebele colour architecture.</p>
              <div className="panel-action-row">
                <a className="text-link" href="/about">
                  LEARN MORE -&gt;
                </a>
                <div className="panel-number">06 / 06</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <KyoobsFooter />
    </main>
  );
}

function AnimatedGlyphField() {
  const [svgMarkup, setSvgMarkup] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch(websiteAsset("elements-wrapped.svg"))
      .then((response) => (response.ok ? response.text() : ""))
      .then((markup) => {
        if (!cancelled) {
          setSvgMarkup(markup.replace(/^<\?xml[^>]*>\s*/i, ""));
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSvgMarkup("");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <div className="hero-glyph-field" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
}
