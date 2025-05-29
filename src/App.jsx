import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast'

import { useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './components/Login';
import MyDocuments from './pages/MyDocuments';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';

import AdminLogin from './components/Admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminDocuments from './pages/admin/AdminDocuments';
import AdminContacts from './pages/admin/AdminContacts';
import ViewDocument from './pages/ViewDocument';
import AdminList from './pages/admin/AdminList';
import UpgradePlan from './pages/UpgradePlan';

const App = () => {
  const isAdminPath = useLocation().pathname.includes("admin");

  const { showUserLogin, showAdminLogin } = useAppContext();

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      {isAdminPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <div className={`${isAdminPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/my-documents' element={<MyDocuments />} />
          <Route path='/my-documents/:id' element={<ViewDocument />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/upgrade-plan' element={<UpgradePlan />} />

          {/* Admin */}
          <Route path='/admin' element={showAdminLogin ? <AdminLogin /> : <AdminLayout />}>
            <Route index element={showAdminLogin ? null : <AdminDashboard />} />
            <Route path='all-users' element={showAdminLogin ? null : <AdminUsers/>} />
            <Route path='all-documents' element={showAdminLogin ? null : <AdminDocuments/>} />
            <Route path='all-contacts' element={showAdminLogin ? null : <AdminContacts/>} />
            <Route path='all-admins' element={showAdminLogin ? null : <AdminList/>} />
          </Route>

        </Routes>
      </div>

      {isAdminPath ? null : <Footer />}
    </div>
  )
}

export default App;
