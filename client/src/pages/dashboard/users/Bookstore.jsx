import BookStoreGrid from './BookStoreGrid';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';


const Bookstore = () => {

  return (
    <div >
      <Header/> 
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar/>
        <BookStoreGrid/>
      </div>
    </div>
  );
};

export default Bookstore;
