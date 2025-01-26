import { Routes, Route } from 'react-router-dom';
import ListeCard from './ListeCards';
import HeaderN from './Navbar';
import SignUp from './SignUp';
import SellerInfo from './SellerInfo';
import ItemInformation from './ItemInformation';
import AddAds from './AddAds';
import Picture from './Picture';
import MyAdds from './MyAdds';
import ProtectedRoute from './ProtectedRoute';  // Import the ProtectedRoute
import { AuthProvider } from './AuthContext';
import Admin from './Admin';
//import Login from './Login';

function App() {
  // <Route path="/signup" element={<SignUp />} />
  return (
    <AuthProvider>
    <div>
      <HeaderN />

      <Routes>
        <Route path="/" element={<ListeCard />} />
       
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/iteminformation" element={<ItemInformation />} />
        <Route path="/addads" element={ 
          <ProtectedRoute>
            <AddAds />
          </ProtectedRoute>
        } />
        <Route path="/picture" element={<Picture />} />
        <Route path='/seller-info' element={<SellerInfo />} />
        <Route path='/Myadds' element={<MyAdds />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
