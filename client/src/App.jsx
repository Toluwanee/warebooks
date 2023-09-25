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
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="workspace" element={<PublisherWorkspace />} />
        <Route path="bookstore" element={<BookStore />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="termsofservice" element={<TermsOfService />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
