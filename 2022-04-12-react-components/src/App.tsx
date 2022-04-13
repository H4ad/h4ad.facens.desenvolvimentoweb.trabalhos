import 'react-toastify/scss/main.scss';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';

function App() {
  return (<>
    <ToastContainer autoClose={ 5_000 } />
    <Home />
  </>);
}

export default App;
