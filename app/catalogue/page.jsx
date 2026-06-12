import KyoobsFooter from "../components/KyoobsFooter";
import KyoobsHeader from "../components/KyoobsHeader";

const websiteAsset = (file) => `/assets/website-elements/${file}`;

const previews = Array.from({ length: 9 }, (_, index) => ({
  src: websiteAsset(`Kyoob-preview-${index + 1}.png`),
  label: `KYOOB ${String(index + 1).padStart(2, "0")}`
}));

export default function CataloguePage() {
  return (
    <main className="site-shell">
      <KyoobsHeader />
      <section className="catalogue-room">
        <div className="room-heading">
          <span className="kicker">CATALOGUE</span>
          <h2>A portraiture archive of a foreign species.</h2>
          <p>
            More collectible art pieces are still in formation. Each Kyoob will become a unique piece of collectible
            art. More will be revealed as the brand takes shape.
          </p>
        </div>

        <div className="catalogue-rail" aria-label="Catalogue Kyoobs marquee">
          {[...previews, ...previews].map((preview, index) => (
            <figure className="catalogue-card" key={`${preview.src}-${index}`} aria-hidden={index >= previews.length}>
              <img src={preview.src} alt={index < previews.length ? preview.label : ""} />
              <figcaption>{preview.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <KyoobsFooter />
    </main>
  );
}
