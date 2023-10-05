import Layout from './shared/Layout';
import { Listbox } from '@headlessui/react';
import LibraryStatsGrid from './LibraryStatsGrid';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';


const Library = () => {
  return (
    <div >
      <Header/> 
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar/>
        <LibraryStatsGrid/>
      </div>
    </div>
  )
}

export default Library