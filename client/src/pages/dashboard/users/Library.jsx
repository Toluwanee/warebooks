import React from 'react'
import { Link } from "react-router-dom";
import Layout from './shared/Layout';


const Library = () => {
  return (
    <div>
        <Layout/>
        <p> this is Library </p> <Link to="/dashboard" className='underline'> go to dashboard </Link>
    </div>
  )
}

export default Library