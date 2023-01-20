
import './App.css';
import Details from './Details';
import Group from './Group';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='after__header'>
        <Sidebar />
        <div className='details__group'>
        <Details />
        {/* <Group /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
