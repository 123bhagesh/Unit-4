import logo from './logo.svg';
import './App.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <div className="App" style={{backgroundColor:"rgb(250, 246, 247)", margin:'auto', textAlign:"center"}} >

        
          <div>
              <div><h1>Payment Detail</h1></div>
              <div>
              <FormControl >
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' placeholder='Enter Email...' style={{ }}/>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor='number'>Card Number</FormLabel>
                <Input id='email' type='number' placeholder='Enter Number...' />
              </FormControl>
              </div>
              <div >
        
                <FormControl>
                  <FormLabel htmlFor='number'>Expiry Month</FormLabel>
                  <Input id='email' type='month' placeholder='Month...'/>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor='number'>Expiry year</FormLabel>
                  <Input id='email' type='year' placeholder='Year...' />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor='number'>CVC</FormLabel>
                  <Input id='email' type='number' placeholder='CVC...' />
                </FormControl>

              </div>
              <div><h1>Payment amount: 1250</h1></div>
              <Button colorScheme='pink' marginTop='10px' >Pay</Button>
            </div>
    </div>
  );
}

export default App;
