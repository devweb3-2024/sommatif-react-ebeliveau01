import './App.css';
import PagePrincpale from './pages/PagePrincipale';
import CarteProvider from './context/carte.context';

function App() {
  return (
    <CarteProvider>
      <PagePrincpale />
    </CarteProvider>
  );
}

export default App;
