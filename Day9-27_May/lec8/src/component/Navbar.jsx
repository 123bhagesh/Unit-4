import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

export const Navbar = () => {
  return (
  
      
    <Buttonn colorScheme='blue'>Button</Buttonn>
    <Menu>
  <MenuButtontton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButtontton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu></d

  )
}
