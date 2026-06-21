import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <span className="eyebrow"> A Engineer who Judges a problem by its constraints...<br/> Because if the constraints does not impress you what else can</span>
        <h1>
          Hi, I&apos;m Jagpreet Singh.
          <br />
          I build software 
          <br />
          that <span className="accent">doesn&apos;t suck.</span>
        </h1>
        <p className="tagline">
          Full-stack developer, Open-Source Contributor, Mentor and a triage member who dedicated to solving real-world challenges, and the
          I thrive on collaborating with people to deliver meaningful results. Based in Pune,
          working with teams everywhere.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#work">
            see the work →
          </a>
          <a className="btn btn-ghost" href="#contact">
            say hi 
          </a>
        </div>
      </div>

      <HeroVisual/>
    </section>
  );
}
