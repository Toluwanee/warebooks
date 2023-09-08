
import './App.css'
import Header from './components/Header';
import PublisherWorkspace from './components/PublisherWorkspace';
import Bookstore from './components/Bookstore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-600 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <PublisherWorkspace />
        <Bookstore />
      </div>
      <Footer />
    </div>
  );
}


export default App
