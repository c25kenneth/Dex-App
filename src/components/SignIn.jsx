import { Box, Button } from "@chakra-ui/react"
import {useMoralis} from 'react-moralis'

function SignIn() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    
    const login = async () => {
        if (!isAuthenticated) {
  
          await authenticate({signingMessage: "Log into the DEX App!" })
            .then(function (user) {
              console.log("logged in user:", user);
              console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      } 
    return <div>
        <Box display={'flex'} paddingTop={'52'}>
            <Button rounded={true} onClick={login}>
                Sign in with MetaMask! 🦊
            </Button>
        </Box>

    </div>
}

export default SignIn