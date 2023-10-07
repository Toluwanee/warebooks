import PublishPage from './PublishPageGrid';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';

const SubmitNow = () => {

    return (
      <div >
        <Header/> 
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
          <Sidebar/>
          <PublishPage/>
        </div>
      </div>
    );
  };
  
  export default SubmitNow;
  