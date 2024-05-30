import styles from "./style";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
// import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Features from "./pages/Features";
import Loginpage from "./pages/Loginpage";
import ContactUs from "./pages/ContactUs";
// import Predictions from "./pages/Predictions";
// import Predictions from "./components/Crypto/CryptoGraph-pred";
import Predictions from "./components/Forms/Predictions";
// import Cryptodata from "./components/Crypto/Cryptodt";
import FAQ from "./components/Forms/FAQ";
import Cryptoinfo from './components/Crypto/Cryptoinfo';
import CryptoPrediction from './components/Crypto/CryptoPrediction';
import Feedback from "./components/Forms/Feedback";
import Privacy from "./components/Forms/Privacy";
import Reportabug from "./components/Forms/Reportabug";
import ReportFeature from "./pages/ReportFeature";
import Home from "./components/Home/Home";
import Feature from "./pages/Feature";

const App = () => (
  <>
    <div className="bg-primary w-full  overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/cryptocurrency' element={<Cryptoinfo/>}></Route>
        <Route exact path="/feature" element={<Feature />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/report" element={<Reportabug />} />
        <Route exact path="/reportfeature" element={<ReportFeature />} />
        <Route exact path='/' element={<CryptoPrediction/>}></Route>
        <Route exact path='/cryptopredictions' element={<CryptoPrediction/>}></Route>
        <Route exact path='/cryptoinfo/:currencyName/:symbolName' element={<CryptoPrediction/>}></Route>

        {/* <Route exact path="/predictions" element={<Predictions/>} /> */}
        <Route exact path="/predictions" element={<Predictions />} />
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
