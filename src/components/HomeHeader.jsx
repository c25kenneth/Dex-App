import {Button, Center, Text} from '@chakra-ui/react'
import React from 'react'
import {useMoralis} from 'react-moralis'

function HomeHeader () {
    const {logout, user, provider} = useMoralis();
    return <div>

        <Text fontSize={{ base: '33px', md: '40px', lg: '70px' }} fontWeight={'bold'} bgGradient='linear(to-r, green.200, pink.500)' bgClip={'text'} align={'center'}>
            Welcome to the DEX!
        </Text>
        <Text fontSize={{ base: '24px', md: '38px', lg: '33px' }} align={'center'} marginBottom={'58px'}>Your Eth Address: {user.get("ethAddress")}</Text>
    </div>
}

export default HomeHeader; 