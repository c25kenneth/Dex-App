import {VStack, Text} from '@chakra-ui/react'
import WelcomeHeader from './components/WelcomeHeader'
import SignIn from './components/SignIn'
import {useMoralis} from 'react-moralis'
import Home from './components/home'

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  if (isAuthenticated == false) {
    return <div>
      <VStack alignItems={'center'}>
      <WelcomeHeader/>
      <SignIn/>
    </VStack>
    </div>
  } else {
    return <Home/>
  }


  
}

export default App
