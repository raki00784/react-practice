
import Navbar from './Navbar';
import Textforms from './Textforms'

function App() {
  return (
  <>
  <Navbar title="My Textutils"/>

  <div className='container'>
  <Textforms heading="Enter the text to analyze :" summery="Your text summery :" preview="Page preview" />
  </div>
  </>
    
  );
}

export default App;
