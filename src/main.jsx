import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import {MoralisProvider} from 'react-moralis'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>  
    <MoralisProvider appId='e2mk9ASTYigrjIPAkYHjA7yTjLX6ZaydPlkD9XFW' serverUrl='https://azt7aishxt9z.usemoralis.com:2053/server'>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MoralisProvider>

  </React.StrictMode>
)
//createRoot(document.getElementById('root'))