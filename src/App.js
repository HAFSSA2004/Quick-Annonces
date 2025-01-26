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
import DashboardFinance from './DashboardFinance/DashboardFinance';

import DashboardContextProvider from './context/DashboardContext';  // Ensure the path is correct


function App() {
  return (
    <AuthProvider>
      <DashboardContextProvider>  {/* Wrap your app or specific part of your app */}
        <div>
          <HeaderN />

          <Routes>
            <Route path="/" element={<ListeCard />} />
            <Route path="/DashboardFinance" element={<DashboardFinance />} />
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
      </DashboardContextProvider>
    </AuthProvider>
  );
}

export default App;
