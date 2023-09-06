import './index.scss';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import HomeImage from '../../assets/images/Home.jpg';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet />

        <span className='tags middle-tags1'>&lt;img&gt;</span>
        <img className="homeImage" src={HomeImage} alt="home" />
        <span className='tags middle-tags2'>&lt;/img&gt;</span>

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;


