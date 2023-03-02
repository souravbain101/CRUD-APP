
import './App.css';



import AddUser from './component/AddUser';
import Navbar from './component/Navbar';
import AllUsers from './component/AllUsers';
import CrudApp from './component/CrudApp';
import{BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter className="App">
           
      <Navbar/>

      <Routes>

      <Route path='/' element={<CrudApp/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path='add' element={<AddUser/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
