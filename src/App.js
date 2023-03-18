import './App.css';
import Login from './Components/Login';
import SuperAdmin from './Components/SuperAdminDashboard';
import Partner from './Components/PartnerDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from './Protected'

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/superadmin' element={<Protected Component = {SuperAdmin}/>}></Route>
          <Route path='/partner' element={<Protected Component = {Partner}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
