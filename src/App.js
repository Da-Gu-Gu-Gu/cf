import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navigation from './components/utils/Navigation';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
        <Router>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
        </ChakraProvider>
  );
}

export default App;
