import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import ListeCard from './ListeCards';
import HeaderN from './Navbar';
import SignUp from './SignUp';
import Footer from './Footer';
import ItemInformation from './ItemInformation';
import AddAds from './AddAds';
//import Api from './Api';

function App() {
  return (
    <div>
      <HeaderN />
      <Routes>
        <Route path="/" element={<ListeCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/iteminformation" element={<ItemInformation />} />
        <Route path="/addads" element={<AddAds />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
