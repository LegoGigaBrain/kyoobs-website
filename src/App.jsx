"use client";

import Link from "next/link";
import { useRef } from "react";
import { FaDiscord, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { href: "/world-of-formation", label: "WORLD OF FORMATION" },
  { href: "/catalogue", label: "CATALOGUE" },
  { href: "/manifestation", label: "WORLD OF EXPRESSION" },
  { href: "/about", label: "ABOUT" }
];

const heroGlyphs = [
  { src: "/assets/website-elements/element-6.svg", x: 50, y: 29, size: 118 },
  { src: "/assets/website-elements/element-5.svg", x: 44, y: 45, size: 92 },
  { src: "/assets/website-elements/element-3.svg", x: 69, y: 39, size: 150 },
  { src: "/assets/website-elements/element-15.svg", x: 73, y: 27, size: 58 },
  { src: "/assets/website-elements/element-10.svg", x: 39, y: 57, size: 78 },
  { src: "/assets/website-elements/element-13.svg", x: 78, y: 70, size: 92 },
  { src: "/assets/website-elements/element-16.svg", x: 52, y: 80, size: 72 },
  { src: "/assets/website-elements/element-7.svg", x: 57, y: 23, size: 20 },
  { src: "/assets/website-elements/element-7.svg", x: 45, y: 33, size: 20 },
  { src: "/assets/website-elements/element-8.svg", x: 49, y: 38, size: 15 },
  { src: "/assets/website-elements/element-8.svg", x: 74, y: 79, size: 20 },
  { src: "/assets/website-elements/element-9.svg", x: 60, y: 77, size: 20 },
  { src: "/assets/website-elements/element-11.svg", x: 66, y: 79, size: 18 },
  { src: "/assets/website-elements/element-12.svg", x: 42, y: 76, size: 86 },
  { src: "/assets/website-elements/element-14.svg", x: 76, y: 49, size: 104 },
  { src: "/assets/website-elements/element-4.svg", x: 64, y: 24, size: 92 },
  { src: "/assets/website-elements/element-2.svg", x: 39, y: 70, size: 72 }
].map((glyph, index) => ({ ...glyph, delay: index * -0.45 }));

const formationFloaters = [
  { src: "/assets/formation/LeftEye_TwinkleEye_Saber.png", x: 5, y: 18, size: 9, r: -5 },
  { src: "/assets/formation/Nose_Blok_Red.png", x: 4, y: 30, size: 10, r: -10 },
  { src: "/assets/formation/RightEye_SideEye_Royal.png", x: 4, y: 94, size: 9, r: -8 },
  { src: "/assets/formation/Nose_Triagai_Pastel.png", x: 11, y: 42, size: 10, r: -12 },
  { src: "/assets/formation/LeftEye_ClearEye_Mint.png", x: 23, y: 13, size: 9, r: 0 },
  { src: "/assets/formation/Mouth_Strawberry_Gold.png", x: 40, y: 21, size: 8, r: -10 },
  { src: "/assets/formation/LeftEye_StraightEye_Haze.png", x: 51, y: 12, size: 8, r: 5 },
  { src: "/assets/formation/Nose_Bizolium_Gold.png", x: 59, y: 16, size: 8, r: 0 },
  { src: "/assets/formation/RightEye_OpenEye_Caution.png", x: 76, y: 16, size: 8, r: 12 },
  { src: "/assets/formation/Mouth_Nude_Ice.png", x: 89, y: 30, size: 8, r: -18 },
  { src: "/assets/formation/Mouth_Mango_Truth.png", x: 96, y: 11, size: 10, r: 0 },
  { src: "/assets/formation/Nose_Trifatso_Purple.png", x: 81, y: 36, size: 8, r: -12 },
  { src: "/assets/formation/Hair_Fro.png", x: 66, y: 51, size: 12, r: -35 },
  { src: "/assets/formation/Hats_Purple_Kufi.png", x: 96, y: 49, size: 9, r: 0 },
  { src: "/assets/formation/Mouth_AquaBerry_Sky.png", x: 90, y: 66, size: 8, r: 13 },
  { src: "/assets/formation/Mouth_Strawberry_Gold.png", x: 82, y: 66, size: 8, r: -18 },
  { src: "/assets/formation/Nose_Blok_Red.png", x: 85, y: 95, size: 10, r: -10 },
  { src: "/assets/formation/Mouth_Nude_Ice.png", x: 94, y: 94, size: 10, r: -18 },
  { src: "/assets/formation/Nose_Blok_Red.png", x: 68, y: 93, size: 9, r: -12 },
  { src: "/assets/formation/Hair_Fro.png", x: 35, y: 96, size: 8, r: 6 },
  { src: "/assets/formation/RightEye_OpenEye_Caution.png", x: 18, y: 71, size: 8, r: 12 },
  { src: "/assets/formation/Mouth_AquaBerry_Sky.png", x: 32, y: 69, size: 8, r: -10 },
  { src: "/assets/formation/Nose_Bizolium_Gold.png", x: 20, y: 53, size: 8, r: 0 }
].map((item, index) => ({ ...item, delay: index * -0.38 }));

const previews = Array.from({ length: 9 }, (_, index) => ({
  src: `/assets/website-elements/Kyoob-preview-${index + 1}.png`,
  label: `KYOOB ${String(index + 1).padStart(2, "0")}`
}));

const physicalArtifacts = Array.from({ length: 13 }, (_, index) => {
  const extension = index === 3 || index === 12 ? "jpg" : "png";
  return {
    src: `/assets/manifestation/physical-${String(index + 1).padStart(2, "0")}.${extension}`,
    label: `ARTIFACT ${String(index + 1).padStart(2, "0")}`
  };
});

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="header-logo" href="/" aria-label="KYOOBS home">
        <img src="/assets/website-elements/Kyoobs-logo-wordmark.svg" alt="KYOOBS" />
      </Link>
      <nav className="header-nav" aria-label="KYOOBS navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <button className="connect-button" type="button">CONNECT</button>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/assets/website-elements/Kyoobs-logo-wordmark.svg" alt="KYOOBS" />
      <p>&copy; 2026 Blaen Design, Pty. Kyoobs and associated artwork are copyrighted 2026. All right reserved.</p>
      <div className="socials" aria-label="Social media links">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="X"><FaXTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="TikTok"><FaTiktok /></a>
        <a href="#" aria-label="Discord"><FaDiscord /></a>
      </div>
    </footer>
  );
}

function SiteChrome({ children, route = false }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={route ? "route-main" : undefined}>{children}</main>
      <SiteFooter />
    </div>
  );
}

function HeroPanel() {
  const panelRef = useRef(null);

  const handlePointerMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
    panelRef.current.style.setProperty("--cursor-x", `${x}px`);
    panelRef.current.style.setProperty("--cursor-y", `${y}px`);
  };

  return (
    <article className="panel hero-panel" data-panel ref={panelRef} onPointerMove={handlePointerMove}>
      <div className="hero-glyph-field" aria-hidden="true">
        {heroGlyphs.map((glyph, index) => (
          <img
            className="hero-glyph"
            src={glyph.src}
            alt=""
            key={`${glyph.src}-${index}`}
            style={{
              "--x": glyph.x,
              "--y": glyph.y,
              "--size": `${glyph.size}px`,
              "--delay": `${glyph.delay}s`
            }}
          />
        ))}
      </div>
      <div className="hero-face-wrap">
        <img className="hero-face" src="/assets/website-elements/Hero-Kyoob.png" alt="Formed Kyoob portrait" />
      </div>
      <div className="hero-copy">
        <h1>WE<br />DECONSTRUCT<br />TO RECONSTRUCT</h1>
        <div className="hero-rule" />
        <p>Identity is not given.<br />It is formed</p>
        <Link className="solid-link" href="/world-of-formation">ENTER THE WORLD</Link>
      </div>
      <nav className="cosmology-nav" aria-label="KYOOBS worlds">
        <span>EMANATION</span>
        <i />
        <span>CREATION</span>
        <i />
        <span>FORMATION</span>
        <i />
        <span>MANIFESTATION</span>
      </nav>
      <div className="sound-chip">
        <span>SOUND</span>
        <span>ON</span>
        <span className="sound-wave" aria-hidden="true" />
      </div>
      <div className="panel-number">01 / 08</div>
    </article>
  );
}

function CatalogueCarousel({ compact = false }) {
  const artwork = compact ? previews : [...previews, ...previews];
  return (
    <div className={compact ? "catalogue-grid" : "art-carousel"} aria-label="KYOOBS artwork carousel">
      <div className={compact ? "catalogue-grid-inner" : "art-carousel-track"}>
        {artwork.map((item, index) => (
          <figure key={`${item.src}-${index}`}>
            <img src={item.src} alt={item.label} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function PhysicalCarousel({ compact = false }) {
  const artifacts = compact ? physicalArtifacts : [...physicalArtifacts, ...physicalArtifacts];
  return (
    <div className={compact ? "physical-grid" : "physical-carousel"} aria-label="Physical KYOOBS artifacts carousel">
      <div className={compact ? "physical-grid-inner" : "physical-carousel-track"}>
        {artifacts.map((item, index) => (
          <figure key={`${item.src}-${index}`}>
            <img src={item.src} alt={item.label} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function HomeLanding() {
  return (
    <section className="home-grid" id="top">
      <HeroPanel />

      <article className="panel formation-preview" data-panel>
        <div className="panel-number">02 / 08</div>
        <div className="formation-preview-floaters" aria-hidden="true">
          {heroGlyphs.slice(0, 9).map((glyph, index) => (
            <img
              src={glyph.src}
              alt=""
              key={`formation-preview-${glyph.src}-${index}`}
              style={{ "--x": [78, 34, 88, 62, 20, 82, 43, 73, 93][index], "--y": [17, 19, 13, 56, 62, 77, 72, 37, 52][index] }}
            />
          ))}
        </div>
        <div className="formation-preview-copy">
          <h2>THE<br />WORLD<br />OF<br />FORMATION</h2>
          <p>A dimension of pure potential. Where identity assembles and meaning takes shape.</p>
          <Link className="text-link arrow-link" href="/world-of-formation">EXPLORE</Link>
        </div>
        <div className="color-index" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </article>

      <article className="panel rationale-panel" data-panel>
        <div className="panel-number">03 / 08</div>
        <span className="kicker">RATIONALE</span>
        <div className="rationale-lines">
          <p><img src="/assets/website-elements/element-11.svg" alt="" />Reality is no longer singular.</p>
          <p><img src="/assets/website-elements/element-5.svg" alt="" />Formation precedes manifestation.</p>
          <p><img src="/assets/website-elements/element-6.svg" alt="" />We inherit fractured worlds.</p>
          <p><img src="/assets/website-elements/element-3.svg" alt="" />Reconstruction is the new creation.</p>
          <p><img src="/assets/website-elements/element-1.svg" alt="" />Perspective is architecture.</p>
          <p><img src="/assets/website-elements/element-10.svg" alt="" />Identity is assembled.</p>
        </div>
        <strong>I AM KYOOB</strong>
      </article>

      <article className="panel catalogue-panel" data-panel>
        <div className="panel-number">04 / 08</div>
        <div className="panel-copy">
          <span className="kicker">CATALOGUE</span>
          <h2>EXPLORE<br />THE FORMATION</h2>
          <p>Collect Kyoobs. Each one is a unique reconstruction</p>
          <Link className="text-link arrow-link" href="/catalogue">VIEW COLLECTION</Link>
        </div>
        <CatalogueCarousel />
      </article>

      <article className="panel expression-panel" data-panel>
        <div className="panel-number">05 / 08</div>
        <div className="panel-copy">
          <span className="kicker">WORLD OF EXPRESSION</span>
          <h2>FROM 2D<br />TO REALITY</h2>
          <p>Form becomes presence. Kyoobs manifest. This world is meant for expression</p>
          <Link className="text-link arrow-link" href="/manifestation">PREVIEW</Link>
        </div>
        <img src="/assets/manifestation/physical-01.png" alt="Physical KYOOBS artifact preview" />
      </article>

      <article className="panel about-panel" data-panel>
        <div className="panel-number">06 / 08</div>
        <div className="panel-copy">
          <span className="kicker">ABOUT</span>
          <h2>EXPRESSIVE<br />IDENTITY</h2>
          <p>Kyoobs is a study of the world of formation, identity, reconstruction and an ongoing study of who we are and how we become</p>
          <Link className="text-link arrow-link" href="/about">LEARN MORE</Link>
        </div>
        <img src="/assets/website-elements/About-Kyoob-no-neck.png" alt="About Kyoob portrait" />
      </article>
    </section>
  );
}

export default function App() {
  return (
    <SiteChrome>
      <HomeLanding />
    </SiteChrome>
  );
}

export function WorldOfFormationPage() {
  return (
    <SiteChrome route>
      <section className="formation-page">
        <div className="formation-page-field" aria-hidden="true">
          {formationFloaters.map((item, index) => (
            <img
              src={item.src}
              alt=""
              key={`${item.src}-${index}`}
              style={{
                "--x": item.x,
                "--y": item.y,
                "--size": `${item.size}vw`,
                "--r": `${item.r}deg`,
                "--delay": `${item.delay}s`
              }}
            />
          ))}
        </div>
        <img className="formation-page-hero" src="/assets/website-elements/Hero-Kyoob.png" alt="KYOOBS formation figure" />
      </section>
    </SiteChrome>
  );
}

export function CataloguePage() {
  return (
    <SiteChrome route>
      <section className="collection-page">
        <div className="route-heading">
          <span className="kicker">CATALOGUE</span>
          <h1>EXPLORE THE FORMATION</h1>
          <p>Nine visible artworks. The wider collection stays withheld until the world opens.</p>
        </div>
        <CatalogueCarousel compact />
      </section>
    </SiteChrome>
  );
}

export function ManifestationPage() {
  return (
    <SiteChrome route>
      <section className="manifestation-page">
        <div className="route-heading">
          <span className="kicker">WORLD OF EXPRESSION</span>
          <h1>PHYSICAL MANIFESTATION</h1>
          <p>The 2D world enters material reality as collectible artifacts, interiors, and held objects.</p>
        </div>
        <PhysicalCarousel compact />
      </section>
    </SiteChrome>
  );
}

export function AboutPage() {
  return (
    <SiteChrome route>
      <section className="about-page">
        <div className="about-page-copy">
          <span className="kicker">ABOUT</span>
          <h1>EXPRESSIVE IDENTITY</h1>
          <p>
            Kyoobs is a study of the world of formation, identity, reconstruction, and the ongoing work of becoming.
            The beings are human-adjacent, but their proportions obey another law.
          </p>
        </div>
        <img src="/assets/website-elements/About-Kyoob-no-neck.png" alt="KYOOBS portrait" />
      </section>
    </SiteChrome>
  );
}
