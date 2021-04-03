import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Chat from './components/Chat';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
