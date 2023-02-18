import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import WorkProcess from './components/WorkProcess/WorkProcess';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <WorkProcess />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
