import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import Update from './components/update/Update';
import NavBar from './components/navbar/NavBar';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

axios.defaults.baseURL = 'http://localhost:9900/api/users';

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className='container'>
        <LeftBar />
        <Update />
        <RightBar />
      </div>
    </>
  );
};

export default App;
