
import './App.css'
import Header from './components/Header';
import PublisherWorkspace from './components/PublisherWorkspace';
import BookStore from './components/BookStore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />
      <div className="container mx-auto">
        <PublisherWorkspace />
        <BookStore />
      </div>
      <Footer />
    </div>
  );
}


export default App
