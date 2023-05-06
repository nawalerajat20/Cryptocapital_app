import styles from "./style";
import {
  Billing,
  Ted,
  Tedx,
  Tedxdyp,
  Deliverables,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
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

    <div className={`bg-dimRed ${styles.flexStart}`}>
      <div className={`flex-1 ${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>

    <div className={`bg-reds-gradient ${styles.flexStart}`}>
      <div className={`flex ${styles.boxWidth}`}>
      <Ted />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.flexStart}`}>
      <div className={`flex ${styles.boxWidth}`}>
      <Tedx />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.flexStart}`}>
      <div className={`flex ${styles.boxWidth}`}>
      <Tedxdyp />
      </div>
    </div>
    <div className={`bg-reds-gradient ${styles.flexStart}`}>
      <div className={`flex ${styles.boxWidth}`}>
      <Deliverables />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
