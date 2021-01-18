import logo from './logo.svg';
import AddPlayer from './components/AddPlayer';
import ViewPlayers from './components/ViewPlayers';
import './App.css';

function App() {

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
  );
  return (
    <div className="App">
      <AddPlayer/>
      <ColoredLine color="gold" />
      <ViewPlayers/>
    </div>
  );
}

export default App;
