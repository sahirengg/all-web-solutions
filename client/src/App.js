import { Fragment } from "react";
import AppBar from "./components/Appbar/appbar";
import LandingPage from "./pages/Landing/landingPage";
import {__tablet} from './common-components/matches';
import { Route, Routes } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AboutUs from './pages/About-us/about'
import Footer from "./components/Footer/footer";
import { Container} from "@mui/system";
import ContactUs from './pages/Contact-us/contactUs';
function App() {
  const tabletS = __tablet();

  console.log("process---",process.env.REACT_APP_API_URL)

  return (
    <>
    <Container maxWidth='sx'>
   { !tabletS ?  <AppBar /> : <Fragment></Fragment>}
  {/* <BrowserRouter> */}
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<AboutUs />} />
    <Route path='/contact-us' element={<ContactUs />} />
  </Routes>
  {/* </BrowserRouter> */}
  </Container>
  <Footer />

  </>
  );
}

export default App;
