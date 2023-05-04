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
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-reds-gradient ${styles.paddingX} ${styles.flexCenter} `}
    >
      <div className={`${styles.boxWidth}`}>
        <Ted />
        <Tedx />
        <Tedxdypakurdi />
        <Theme/>
        <Footfall />
        <Audience />
        <Speakers />
        <Packages />
        <Timeline />
        <Deliverables />
        <Branding />
        <Engagement />
        <PreEngagement />
        <PostEngagement />
        <PreviousSponsers />
        <ContactUs />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
