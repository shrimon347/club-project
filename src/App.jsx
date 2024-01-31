import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nabvar from "./Components/Nabvar";
import Home from "./Components/Home";
import Error from "./Components/Error";
import AllClubPage from "./Components/AllClubPage";
import ClubDetails from "./Components/ClubDetails";

function App() {
  return (
    <Router>
      <Nabvar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/club" exact Component={AllClubPage} />
        <Route path="/club/:id" exact Component={ClubDetails} />
        <Route path='*' Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
