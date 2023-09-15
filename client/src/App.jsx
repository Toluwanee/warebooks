
import './App.css'
import NavBar from './components/NavBar';
import PublisherWorkspace from './pages/dashboard/publisher/PublisherWorkSpace';
import BookStore from './pages/landingpage/bookstore/BookStore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <NavBar />
      {/* <div className="container mx-auto">
        <PublisherWorkspace />
        <BookStore />
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}


export default App
