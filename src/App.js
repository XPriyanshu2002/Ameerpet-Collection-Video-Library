//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { AdminLogin } from './components/admin-login';
import { DashBoard } from './components/admin-dashboard';
import { EditDashboard } from './components/edit-dashboard';
import { DeleteDashboard } from './components/delete-dashboard';
import { AddDashboard } from './components/add-dashboard';
import { Error404 } from './components/404-error';
import { UserDashboard } from './components/user-dashboard';
import { PaymentPage } from './components/payment-gateway';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin-login' element={<AdminLogin/>} />
          <Route path='/admin-dashboard' element={<DashBoard/>} />
          <Route path='/edit-dashboard/:id' element={<EditDashboard/>} />
          <Route path='/delete-dashboard/:id' element={<DeleteDashboard/>} />
          <Route path='/add-dashboard' element={<AddDashboard/>} />
          <Route path='/user-dashboard' element={<UserDashboard/>} />
          <Route path='/payment-page' element={<PaymentPage/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;