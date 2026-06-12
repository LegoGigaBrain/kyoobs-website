import KyoobsFooter from "../components/KyoobsFooter";
import KyoobsHeader from "../components/KyoobsHeader";

export default function AboutPage() {
  return (
    <main className="site-shell">
      <KyoobsHeader />
      <section className="about-room">
        <div>
          <span className="kicker">ABOUT KYOOBS</span>
          <h2>Expressive identity in reconstructed form.</h2>
        </div>
        <div className="about-copy-stack">
          <p>
            Inspired by Cubist fragmentation and Ndebele color architecture, KYOOBS turns otherness into identity. These
            are not characters, they are beings whose proportions obey another law.
          </p>
          <p>
            Kyoobs are human adjacent beings assembled from fragmented traits, exaggerated proportions and an expressive
            world full of color. They begin in an abstract dimension as 2D formations, then leak into objects, interiors
            and garments as they materialise their universe into the world as we know it.
          </p>
        </div>
      </section>

      <KyoobsFooter />
    </main>
  );
}
