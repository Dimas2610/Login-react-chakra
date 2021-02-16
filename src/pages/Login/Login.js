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

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider options = { { 
        useSystsemColorMode : true 
      } } >
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const LoginArea = () => {
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
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>LOGIN</Heading>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={4} textAlign='left'>
      <form>

        <FormControl>
          <FormLabel>Usuario</FormLabel>
          <Input type='text' placeholder='Introduzca su usuario' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' placeholder='Introduzca su contraseña' />
        </FormControl>
        
        <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              <Checkbox>Recordarme</Checkbox>
            </Box>
            <Box>
              <Link color={`${VARIANT_COLOR}.500`}>¿Has olvidado la contraseña?</Link>
            </Box>
        </Stack>

        <Stack>
          <Button colorScheme="blue" mt={5} >Entrar</Button>
        </Stack>    
             
        <Stack flexDirection='row' justifyContent='center' mt={4}>
          <Box>
            ¿No es un miembro?<Link color={`${VARIANT_COLOR}.500`}> Registrarse</Link>
          </Box>
        </Stack>
      </form>
    </Box>
  )
}

export default Login
