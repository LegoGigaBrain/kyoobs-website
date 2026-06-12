import KyoobsFooter from "../components/KyoobsFooter";
import KyoobsHeader from "../components/KyoobsHeader";

const manifestationAsset = (file) => `/assets/manifestation/${file}`;

const physicalRenders = [
  { src: manifestationAsset("interior-rug.png"), title: "Interior Rug", meta: "World of Expression" },
  { src: manifestationAsset("wall-piece.png"), title: "Wall Piece", meta: "Spatial artifact" },
  { src: manifestationAsset("collector-artifact.png"), title: "Collector Object", meta: "Physical Kyoob" },
  { src: manifestationAsset("fashion.png"), title: "Wearable Signal", meta: "Body manifestation" }
];

export default function ManifestationPage() {
  return (
    <main className="site-shell">
      <KyoobsHeader />
      <section className="manifestation-room">
        <div className="room-heading">
          <span className="kicker">PHYSICAL MANIFESTATION</span>
          <h2>From formation to reality.</h2>
          <p>This is where the abstract dimension materialises into physical reality.</p>
        </div>

        <div className="manifestation-rail" aria-label="Physical manifestation marquee">
          {[...physicalRenders, ...physicalRenders].map((item, index) => (
            <figure className="manifestation-card" key={`${item.src}-${index}`} aria-hidden={index >= physicalRenders.length}>
              <img src={item.src} alt={index < physicalRenders.length ? item.title : ""} />
              <figcaption>
                {item.title}
                <span>{item.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <KyoobsFooter />
    </main>
  );
}
