import {Button, Text, VStack, Menu, MenuButton, MenuList, MenuItemOption, Box, NumberInput, Center, NumberInputField, color} from '@chakra-ui/react'
import HomeHeader from './HomeHeader';
import {useMoralis, useOneInchTokens, useOneInchSwap} from 'react-moralis'
import { useState } from 'react';
import {ChevronDownIcon} from '@chakra-ui/icons'
//useOneInchQuote, useOneInchSwap, useOneInchTokens
function Home () {
    const {logout, user, provider} = useMoralis();
    const {getSupportedTokens} = useOneInchTokens();
    const [fromChoice, setFromChoice] = useState('Stable X Token')
    const [toChoice, setToChoice] = useState('Stable X One Inch Token')
    function getTok() {
        const tokens = getSupportedTokens({chain: 'eth'})
        console.log(tokens); 
    }

    // function swapTokens() {
        
    // }
    
    return <div>
        <VStack alignItems={'center'}>
            <Button alignSelf={'flex-end'} m={5} onClick={logout}>
                Click to Log Out!
            </Button>
            <HomeHeader/>
            <Box paddingBottom={'40px'}>
                <Text>Your current from Token Choice: {fromChoice}</Text>
                <Center>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                            From Token
                        </MenuButton>
                        <MenuList>
                            <MenuItemOption onClick={() => setFromChoice('Stable X Token')}>
                                Stable X Token
                            </MenuItemOption>
                            <MenuItemOption onClick={() => setFromChoice('One Inch Token')}>
                                One Inch Token
                            </MenuItemOption>
                            <MenuItemOption onClick={() => setFromChoice('DAO Token')}>
                                DAO Token
                            </MenuItemOption>
                            <MenuItemOption onClick = {() => setFromChoice('XIO Token')}>
                                XIO Token
                            </MenuItemOption>
                        </MenuList>
                    </Menu>
                </Center>
               
            </Box>
            
            <Box width={'350px'}>
                <Text>Enter in the amount you want to exchange here!</Text>
                <NumberInput size={'lg'}>
                    <NumberInputField/>
                </NumberInput>
            </Box>

            
            <Box paddingTop={'40px'}>
                <Text>Your current To Token Choice: {toChoice}</Text>
                <Center>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                            To Token
                        </MenuButton>
                        <MenuList>
                            <MenuItemOption onClick={() => setToChoice('Stable X Token')}>
                                Stable X Token
                            </MenuItemOption>
                            <MenuItemOption onClick={() => setToChoice('One Inch Token')}>
                                One Inch Token
                            </MenuItemOption>
                            <MenuItemOption onClick={() => setToChoice('DAO Token')}>
                                DAO Token
                            </MenuItemOption>
                            <MenuItemOption onClick = {() => setToChoice('XIO Token')}>
                                XIO Token
                            </MenuItemOption>
                        </MenuList>
                    </Menu>
                </Center>
                
            </Box>
            
            <Box paddingTop={'150px'}>   
                <Button padding={'35px'} onClick={console.log('SWAP!')} bgGradient='linear(to-r, teal.500, green.500)'>Click to Swap tokens!</Button>
            </Box>
            
        </VStack>

    </div>
}

export default Home; 