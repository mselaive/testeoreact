import './App.css';
import HeroSection from './components/Hero';
import Header from './components/NavBar';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
     
       <Header/>
       <main id='main'>
          <HeroSection/>
          <TeamSection/>
          <Footer/>
        
       </main>


    </div>
  );
}

export default App;
