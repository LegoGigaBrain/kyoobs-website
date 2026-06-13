import KyoobsFooter from "../components/KyoobsFooter";
import KyoobsHeader from "../components/KyoobsHeader";

const manifestationAsset = (file) => `/assets/manifestation/${file}`;

const physicalRenders = [
  "physical-01.png",
  "physical-02.png",
  "physical-03.png",
  "physical-04.jpg",
  "physical-05.png",
  "physical-06.png",
  "physical-07.png",
  "physical-08.png",
  "physical-09.png",
  "physical-10.png",
  "physical-11.png",
  "physical-12.png",
  "physical-13.jpg"
].map((file, index) => ({
  src: manifestationAsset(file),
  title: `Physical Collectible ${String(index + 1).padStart(2, "0")}`,
  meta: "World of Expression"
}));

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

        <div className="manifestation-marquee" aria-label="Physical manifestation marquee">
          <div className="manifestation-rail">
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
        </div>
      </section>

      <KyoobsFooter />
    </main>
  );
}
