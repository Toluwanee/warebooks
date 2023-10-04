//import {FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench} from "react-icons/fa"
import { Link } from "react-router-dom";
import Layout from "./shared/Layout";
import DashboardStatsGrid from "./DashboardStatsGrid";


const Dashboard = () => {
  return (
    <div>
      <Layout/>
      <p> this is dashboard </p> <Link to="/library" className="underline"> go to library </Link>
      <DashboardStatsGrid/>
    </div>
  );
};

export default Dashboard;
