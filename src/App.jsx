import './App.css';
import Heart from './components/Heart';

const message = 'cool cud';

function App() {
  return (
    <>
      <Heart msg={message} />
    </>
  );
}

export default App;
