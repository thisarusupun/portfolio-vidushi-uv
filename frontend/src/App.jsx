import Achievements from "./pages/Achievements";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Research from "./pages/Research";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Research />
      <Achievements />
      <Blogs />
      <Contacts />
    </div>
  );
};

export default App;
