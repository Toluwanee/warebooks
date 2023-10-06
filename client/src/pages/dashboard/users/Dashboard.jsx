//import {FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench} from "react-icons/fa"
import { Link } from "react-router-dom";
import Layout from "./shared/Layout";
import DashboardStatsGrid from "./DashboardStatsGrid";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";


const Dashboard = () => {
  return (
    <div >
      <Header/>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar/>
        {/* <Layout/> */}
        {/* <p> this is dashboard </p> <Link to="/library" className="underline"> go to library </Link> */}
        <DashboardStatsGrid/>
      </div>
    </div>
  );
};

export default Dashboard;
