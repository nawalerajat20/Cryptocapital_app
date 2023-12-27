import styles from "./style";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Features from "./pages/Features";
import Cryptocurrency from "./pages/Cryptocurrency";
import Loginpage from "./pages/Loginpage";
import ContactUs from "./pages/ContactUs";
import Predictions from "./pages/Predictions";

const App = () => (
  <>
    <div className="bg-primary w-full  overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/predictions" element={<Predictions/>} />
      </Routes>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
