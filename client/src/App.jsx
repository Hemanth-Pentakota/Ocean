import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom";
import WriteBottle from "./pages/WriteBottle";
import Sea from "./pages/Sea";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/write" element={<WriteBottle/>}/>
      <Route path="/sea" element={<Sea/>}/>
    </Routes>
  );
}

export default App
