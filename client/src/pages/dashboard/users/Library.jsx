import React from 'react'
import { Link } from "react-router-dom";
import Layout from './shared/Layout';
import { Listbox } from '@headlessui/react';
import LibraryStatsGrid from './LibraryStatsGrid';


const Library = () => {
  return (
    <div>
        <Layout/>
        <p> this is Library </p> <Link to="/dashboard" className='underline'> go to dashboard </Link>
        <LibraryStatsGrid/>
    </div>
  )
}

export default Library