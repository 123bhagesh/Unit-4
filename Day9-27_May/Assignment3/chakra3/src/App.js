import logo from './logo.svg';
import './App.css';
import {Box,Heading,ButtonGroup,Button, Flex, Spacer } from '@chakra-ui/react'

function App() {
  return (
    <div className="App" style={{backgroundColor:"rgb(240, 246, 247)"}} >

<Flex minWidth='max-content' alignItems='center' gap='2' display='grid' width='200px' backgroundColor="white">
  <Box p='2'>
    <Heading size='md' margin-left='50px' >Logo</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' display='grid' backgroundColor='white' color='black'>
    <Button color='black' background='white' colorScheme='teal'>Home</Button>
    <Button color='black' background='white' colorScheme='teal'>Trending</Button>
    <Button color='black' background='white' colorScheme='teal'>Explore</Button>
    <Button color='black' background='white' colorScheme='teal'>Favourites</Button>
    <Button color='black' background='white' colorScheme='teal'>Seeting</Button>
  </ButtonGroup>
</Flex>
    </div>
  );
}

export default App;
