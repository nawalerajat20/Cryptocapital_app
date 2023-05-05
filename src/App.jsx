import styles from "./style";
import {
  Navbar,
  Hero,
  Ted,
  Tedx,
  Tedxdypakurdi,
  Theme,
  Footfall,
  Audience,
  Speakers,
  Packages,
  Timeline,
  Deliverables,
  Branding,
  Engagement,
  PreEngagement,
  PostEngagement,
  PreviousSponsers,
  ContactUs,
  Footer,
  Sectionengagement,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Ted />
      </div>
    </div>

    <div className={`bg-reds-gradient ${styles.paddingX}  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Tedx />
      </div>
    </div>

    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Tedxdypakurdi />
      </div>
    </div>

    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Theme />
      </div>
    </div>

    <div className={`bg-gray ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footfall />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Audience />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Speakers />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Packages />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Timeline />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Deliverables />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Sectionengagement />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Branding />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Engagement />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PreEngagement />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PostEngagement />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PreviousSponsers />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ContactUs />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
