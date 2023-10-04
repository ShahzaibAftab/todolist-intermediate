import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <>
      <ToastContainer />
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </>
  );
}

export default App;
