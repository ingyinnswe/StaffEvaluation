import React,{useState, createContext} from "react";
import Home from "./pages/Home";
import SignIn from './_auth/Forms/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from "./admin/AdminLogin";
import AdminControl from "./admin/AdminControl";
import AdminCreate from "./admin/AdminCreate";
import AdminGet from "./admin/AdminGet";
import AdminUpdateProfile from "./admin/AdminUpdateProfile";

export const TokenContext = createContext();

function App() {
  const [token, setToken] = useState('');
  return (
    <TokenContext.Provider value={{ token, setToken }}>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/control" element={<AdminControl />} />
        <Route path="/admin/control/create" element={<AdminCreate />} />
        <Route path="/admin/control/get" element={<AdminGet />} />
        <Route path="/admin/control/update" element={<AdminUpdateProfile/>} />
      </Routes>
    </Router>
    </TokenContext.Provider>
  );
}

export default App;

