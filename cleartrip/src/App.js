import './App.css';
import { AllRoutes } from './Component/AllRoutes';
import { Navbar } from './Component/Navbar';
import { SideNavbar } from './Component/SideNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
