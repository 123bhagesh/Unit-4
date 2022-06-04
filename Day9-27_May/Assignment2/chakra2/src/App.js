import logo from './logo.svg';
// import './App.css';
import { Flex, Spacer,Box,Heading,ButtonGroup,Button } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ChevronDownIcon

} from '@chakra-ui/react'

function App() {
  return (

    <div className="App" style={{display:"flex", justifyContent:"space-between", marginTop:"20px", marginLeft:"10px", marginRight:"10px"}}>

      <div  style={{display:"flex", marginLeft:"10px"}}>
      <div>
         <Box p='2'>
          <Heading size='md'>Logo</Heading>
        </Box>
      </div>
      <Menu isLazy>
        <MenuButton style={{backgroundColor:"", marginRight:"20px", marginLeft:"27px"}}>Inspiration</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>Explore Design Work</MenuItem>
          <MenuItem>New & Noteworthy</MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton style={{backgroundColor:"", marginRight:"20px"}}>Find Work</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>Job Board</MenuItem>
          <MenuItem>Freelance Projects</MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton style={{backgroundColor:"", marginRight:"20px"}}>Learn Design</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>New Window</MenuItem>

        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton style={{backgroundColor:"", marginRight:"20px"}}>Hire Designers</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>New Window</MenuItem>

        </MenuList>
      </Menu>
      </div>
      {/* <div></div> */}
      <div style={{marginRight:"10px"}}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button >Sign In</Button>
          <Button colorScheme='pink'>Sign Up</Button>
        </ButtonGroup>
      </Flex>
      </div>





    </div>
  );
}

export default App;
