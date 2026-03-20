import heroImage from "../assets/images/logo.jpeg";

export const HomePage = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Welcome to</p>
          <h1 className="hero-title">
            Foundation for Muslim Empowerment <span>(FME)</span>
          </h1>
          <p className="hero-subtitle large-text">
            A peaceful Organization <span>(FME)</span> house of worship and
            community, dedicated to Quran, Sunnah, and service.
          </p>
          <div className="hero-actions">
            {/* <a href="#prayer-times" className="btn primary">
              View Prayer Times
            </a> */}
            <a href="#about" className="btn primary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Masjid logo" className="hero-image" />
        </div>
      </section>

      <section id="about" className="section two-col">
        <div>
          <h2>Who We Are</h2>
          <p className="bold-text large-text">
            The Foundation for Muslim Empowerment <span>(FME)</span> is an
            independent Islamic organization committed to uplifting individuals
            and communities through purposeful action. We are non-political,
            non-tribal, non-sectional, and non-discriminatory, firmly upholding
            the values of inclusivity, tolerance, justice, and fair treatment.
            Our mission is rooted in true empowerment—built on access to
            beneficial education and guided by the Quran and the authentic
            Sunnah.
          </p>
        </div>
        <div className="card highlight">
          <h3>Core Focus</h3>
          <ul className="large-text">
            <li>Five daily congregational prayers</li>
            <li>Jumu&apos;ah (Friday) khutbah and prayer</li>
            <li>Quran classes and youth programs</li>
            <li>Community outreach and support</li>
          </ul>
        </div>
      </section>

      <section id="services" className="section cards">
        <p className="bold-text text-center">
          <span>FME</span> Focuses on Four core areas that drive our work and
          impact
        </p>
        <h2>Services</h2>
        <div className="card-grid">
          <article className="card">
            <h3>DA'AWAH</h3>
            <p className="bold-text service-description">
              Spreading authentic Islamic knowledge and inspiring spiritual growth.
            </p>
          </article>
          <article className="card">
            <h3>CHARITY</h3>
            <p className="service-description">
              Supporting vulnerable individuals and communities with compassion and dignity.
            </p>
          </article>
          <article className="card">
            <h3>EDUCATION</h3>
            <p className="service-description">
              Providing meaningful learning opportunities that benefit both deen and dunya.
            </p>
          </article>
          <article className="card">
            <h3>ADVOCACY</h3>
            <p className="service-description">
              Promoting justice, fairness, and the rights and well-being of the Muslim community.
            </p>
          </article>
        </div>
      </section>


      <section id="contact" className="section two-col">
        <div>
          <h2>Visit Foundation for Muslim Empowerment</h2>
          <p className="large-text bold-text">
            7K LUMLEY ROAD WILBERFORCE,
          </p>
          <p className="large-text bold-text">
            FREETOWN, SIERRA LEONE
          </p>
        </div>
        <div className="card">
          <h3>Contact</h3>
          <p className="large-text">Email: foundationformuslime@gmail.com</p>
          <p className="large-text">Phone: +232 79 421132</p>
        </div>
      </section>
    </div>
  );
};
