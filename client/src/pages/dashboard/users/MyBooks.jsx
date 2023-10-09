import MyBookPage from './MyBookPageGrid';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';


const Bookstore = () => {

  return (
    <div >
      <Header/> 
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar/>
        <MyBookPage/>
      </div>
    </div>
  );
};

export default Bookstore;
