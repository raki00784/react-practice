import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
// import TextForm from './Component/TextForm';
function App() {
  return (
   <>
   <Navbar title="Textutils" about="About us"/>
  
   
   <div className="container my-3 ">
   <About/>
   {/* <TextForm/> */}
   </div>
   </>
  );
}

export default App;
