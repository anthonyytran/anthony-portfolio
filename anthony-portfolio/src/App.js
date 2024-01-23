import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;