
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./component/Signup";
import Contact from "./component/Contact";

import { Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white dark:border">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
