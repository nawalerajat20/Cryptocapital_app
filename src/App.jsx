import styles from "./style";
import {
  Navbar,
  Hero,
  Ted,
  Tedx,
  Tedxdypakurdi,
  Chatername,
  Theme,
  Speakers,
  Speakerscards,
  Footfall,
  Attend,
  Insights,
  Deliverables,
  Activities,
  Package,
  Packagecards,
  Footer,
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

    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Ted />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Tedx />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Tedxdypakurdi />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Chatername />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Theme />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Speakers />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Speakerscards />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footfall />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Attend />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Insights />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Deliverables />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Activities />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Package />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Packagecards />
      </div>
    </div>
    <div className={`bg-red-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
