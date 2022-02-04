import Navbar from "./components/navbar/Navbar";
import { NavBarProvider } from "./context/NavBarContext";

function App() {
  return (
    <NavBarProvider>
      <Navbar />
    </NavBarProvider>
  );
}

export default App;
