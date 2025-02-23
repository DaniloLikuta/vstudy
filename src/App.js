
import './App.css';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainContent" style={styles.MainContent}>
      <Sidebar />
      <ChatWindow />
      </div>
      
    </div>
  );
}
const styles = {
  MainContent: {
    display:'flex',
    height:'100%',
  }
}

export default App;
