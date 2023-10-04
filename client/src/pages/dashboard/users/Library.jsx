import React from 'react'
import { Link } from "react-router-dom";
import Layout from './shared/Layout';
import { Listbox } from '@headlessui/react';
import LibraryStatsGrid from './LibraryStatsGrid';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';
import DashboardStatsGrid from './DashboardStatsGrid';


const Library = () => {
  return (
    <div >
      <Header/>
      
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar/>
        {/* <Layout/> */}
        {/* <p> this is dashboard </p> <Link to="/library" className="underline"> go to library </Link> */}
        <LibraryStatsGrid/>
      </div>
    </div>
  )
}

export default Library