import React from 'react'
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { AccordionButton } from "@chakra-ui/react";
import { PhoneIcon, SunIcon } from '@chakra-ui/icons';
const VARIANT_COLOR = 'teal'

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider options = { { 
        useSystsemColorMode : true 
      } } >
        <CSSReset />
        <RegisterArea />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const RegisterArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='400px'
        borderRadius={10}
        textAlign='center'
        boxShadow='lg'
      >
      <Box p={5}>
          <RegisterHeader />
          <RegisterForm />
        </Box>
      </Box>
    </Flex>
  )
}

const RegisterHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>REGISTRARSE</Heading>
    </Box>
  )
}

const RegisterForm = () => {
  return (
    <Box my={4} textAlign='left'>
      <form>

        <FormControl mt={4}>
          <FormLabel>Nombre completo</FormLabel>
          <Input type='text' placeholder='Introduzca su Nombre completo' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Nombre de usuario</FormLabel>
          <Input type='text' placeholder='Introduzca su nombre de usuario' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' placeholder='Introduzca su contraseña' />
        </FormControl>
        
        <Stack>
          <Button colorScheme="blue" mt={5} >Guardar</Button>
        </Stack>    
             
        <Stack flexDirection='row' justifyContent='center' mt={4}>
          <Box>
            ¿Ya tienes una cuenta?<Link color={`${VARIANT_COLOR}.500`}> Inicia sesión</Link>
          </Box>
        </Stack>
      </form>
    </Box>
  )
}

export default Register
