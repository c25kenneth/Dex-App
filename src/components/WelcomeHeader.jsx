import {Text} from '@chakra-ui/react'
import React from 'react';
function WelcomeHeader () {
    return <div>
        <Text fontWeight={'bold'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip={'text'} fontSize={{ base: '24px', md: '40px', lg: '70px' }}>Hello! Welcome to the DEX App!</Text>
        <Text fontWeight={'bold'} fontSize={{ base: '9px', md: '17px', lg: '32px' }}>A Place where you can trade all of your Ethereum Tokens in Peace!</Text>
    </div>
}

export default WelcomeHeader; 