import Header from './NavBar';
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const LandingPageLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LandingPageLayout