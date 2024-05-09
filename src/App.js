import logo from "./logo.svg";
import "./App.css";
import Mainpage from "./components/mainpage";
import Registrationpage from "./components/registrationpage";
import Congratulations_page from "./components/congratulations_page";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nopage from "./components/Nopage";
// import Nopage from "./components/nopage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="/congratualations" element={<Congratulations_page />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
      {/* <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/register" component={Registrationpage} />
        <Route exact path="/congratulations" component={Congratulations_page} />
      </Switch> */}
    </>
    // <div className="App">
    //   {/* <Mainpage /> */}
    //   {/* <Registrationpage /> */}
    //   <Congratulations_page />
    // </div>
  );
}

export default App;
