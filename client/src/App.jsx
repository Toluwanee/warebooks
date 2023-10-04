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


import PublishPage from "./components/PublishPage";
import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="workspace" element={<PublisherWorkspace />} />
        <Route path="bookstore" element={<BookStore />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Tolu dashboard */}
        {/* <Route path="shared" element={<Layout />} />
        <Route index element={<Dashboard />} /> */}
      
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="termsofservice" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route>
      <Route path="/shared" element={<Layout />} />
        {/* {<Route index={true} element={<Invoice/> } /> } */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/library" element={<Library/>} />
      
      </Route>
      
      {/* Tolu dashboard */}
      
        {/* <Route index element={<Dashboard />} /> */}
      
      <Route path="/publishpage" element={<PublishPage />} />
  

      
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

//still going to check for more path to route

export default App;
