import MainBlock from './components/main-block';
import GiveAGift from './components/give-a-gift';
import AboutBlock from './components/about-block';
import Blog from './components/blog';
import Footer from './components/footer';
import Contacts from './components/contacts';
import Impact from './components/impact';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddInfo from './components/add-info';

function App() {
  return (
    <>
      <MainBlock />
      <GiveAGift />
      <AboutBlock />
      <AddInfo />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
