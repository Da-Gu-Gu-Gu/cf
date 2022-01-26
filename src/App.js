import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Navigation from './components/utils/Navigation';
import { ChakraProvider,ColorModeScript,ThemeProvider } from '@chakra-ui/react'
import theme from './components/utils/theme/theme'
import {useSelector} from 'react-redux'
import Friends from './components/Friends'



function App() {
  const user=useSelector(state=>state.user.user)
  console.log(user)

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode}  />
        <Router>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={user?<User/>:<Navigate to="/" />}/>
            <Route path="/friends" element={user?<Friends/>:<Navigate to="/" />}/>
          </Routes>
        </Router>
        </ThemeProvider>
        </ChakraProvider>
  );
}

export default App;
