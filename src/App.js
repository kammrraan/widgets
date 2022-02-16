import Accordion from "./components/Accordion";
import SearchWidget from "./components/SearchWidget";
import MenuBar from "./components/MenuBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { Routes } from "react-router";

function App() {
  const items=[
    {
    title: 'What is a dog?',
    description: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
  },
    {
    title: 'What kinds of dogs are there?',
    description: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
  },
    {
    title: 'How do you acquire a dog?',
    description: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
  }
]
  return (
    <div className="App ui container">
      <Router>
      <MenuBar></MenuBar>
        <Routes>
          <Route path='/Accordian' element={<Accordion items={items}/>}/>
          <Route path='/Search' element={<SearchWidget/>}/>
        </Routes>
      </Router>
      {/* <Accordion  items={items}/> */}
      
    </div>
  );
}

export default App;
