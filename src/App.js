import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Navigation from './components/utils/Navigation';
import { ChakraProvider,ColorModeScript,ThemeProvider } from '@chakra-ui/react'
import theme from './components/utils/theme/theme'

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode}  />
        <Router>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
        </Router>
        </ThemeProvider>
        </ChakraProvider>
  );
}

export default App;
