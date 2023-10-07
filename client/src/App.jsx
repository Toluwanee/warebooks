import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link, Outlet} from "react-router-dom"
import "./App.css";
import Home from "./pages/landingpage/home/Home";
import PublisherWorkspace from "./pages/dashboard/publisher/PublisherWorkSpace";
import BookStore from "./pages/landingpage/bookstore/BookStore";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import LandingPageLayout from "./components/LandingPageLayout";
import { Contact } from "./pages/landingpage/contact/Contact";
import { About } from "./pages/landingpage/about/About";
import { NotFound } from "./pages/errors/notfound/NotFound";
import { PrivacyPolicy } from "./pages/landingpage/policies/PrivacyPolicy";
import { TermsOfService } from "./pages/landingpage/policies/TermsOfService";

//working for the dashboard tolu
import Layout from "./pages/dashboard/users/shared/Layout";
import Dashboard from "./pages/dashboard/users/Dashboard";
import Library from "./pages/dashboard/users/Library";
import Store from "./pages/dashboard/users/Bookstore";
import SubmitNow from "./pages/dashboard/users/SubmitNow";
import MyBooks from "./pages/dashboard/users/MyBooks";

import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="workspace" element={<PublisherWorkspace/>}/>
        <Route path="bookstore" element={<BookStore/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="terms-of-service" element={<TermsOfService/>}/>
      </Route>

      <Route path="*" element={<NotFound/>}/>

      <Route>
      <Route path="/shared" element={<Layout/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/library" element={<Library/>}/>
      <Route path="/books-store" element={<Store/>}/>
      <Route path="/submit-book" element={<SubmitNow/>}/>
      <Route path="/my-books" element={<MyBooks/>}/>
      </Route>
      
    </>
  )
);
function App() {
  return <RouterProvider router={router}/>;
}

//still going to check for more path to route

export default App;
