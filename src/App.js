import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import ListeCard from './ListeCards';
import HeaderN from './Navbar';
import SignUp from './SignUp';
import SellerInfo from './SellerInfo';
//import Footer from './Footer';
import ItemInformation from './ItemInformation';
//import ProductInfo from './AddsP/ProductI';
import AddAds from './AddAds';
import Picture from './Picture';
import MyAdds from './MyAdds';
//import Api from './Api';
//<Footer/>
function App() {
  return (
    <div>
      <HeaderN />
      
      
      <Routes>
        <Route path="/" element={<ListeCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/iteminformation" element={<ItemInformation />} />
        <Route path="/addads" element={<AddAds />} />
        <Route path="/picture" element={<Picture />} />
        <Route path='/seller-info' element={<SellerInfo/>}/>
        <Route path='/Myadds' element={<MyAdds/>}/>
      </Routes>
  
      
    </div>
  );
}

export default App;
