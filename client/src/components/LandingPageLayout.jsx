import Header from './NavBar';
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const LandingPageLayout = () => {
  return (
    <div className='flex flex-col min-h-scree'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LandingPageLayout