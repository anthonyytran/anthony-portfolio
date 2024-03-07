import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import BrowserRouter
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { Helmet } from 'react-helmet'

const GoogleAnalytics = () => (
  <Helmet>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-6S2RHVVWYY"
    ></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6S2RHVVWYY');
      `}
    </script>
  </Helmet>
)

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GoogleAnalytics />
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
  )
}

export default App
