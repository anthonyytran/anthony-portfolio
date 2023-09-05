import './index.scss';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet /> {/* Use the Outlet component from React Router for rendering nested routes */}

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'></span>
        </span>
      </div>
    </div>
  );
};

export default Layout;


