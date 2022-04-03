import { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  useToast,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '@redux-store/hooks';
import Client from '@fb-client';
import { updateUser } from '@redux-slices/userSlice';
import { useRouter } from 'next/router';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const { authToken } = useAppSelector((state) => state.user);
  const [mounted, setMounted] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    return () => setMounted(false);
  }, []);

  const navigateToRegister = () => router.push('/register');

  const signInUserHandler = () => {
    setLoading(true);
    Client.signInUser(email, password).then((response) => {
      setLoading(false);
      if (mounted) {
        if (response.error) {
          toast({
            title: 'Registration Failure',
            description: 'Registration Failed. ' + response.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        } else {
          dispatch(
            updateUser({
              authToken: response.code,
              isLoggedIn: true,
              email: email,
            })
          );
          router.push('/joblist');
        }
      }
    });
  };

  return (
    <Flex
      flexDirection='column'
      width='100wh'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'>
      <Stack
        flexDir='column'
        mb='2'
        justifyContent='center'
        alignItems='center'>
        <Avatar bg='teal.500' />
        <Heading color='teal.400'>Welcome To Homely</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaUserAlt color='gray.300' />}
                  />
                  <Input
                    type='email'
                    placeholder='email address'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    children={<CFaLock color='gray.300' />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {loading ? (
                <Flex width='full' justifyContent='center' alignItems='center'>
                  <Spinner color='teal' />
                </Flex>
              ) : (
                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  onClick={signInUserHandler}
                  width='full'>
                  Login
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{' '}
        <Link color='teal.500' onClick={navigateToRegister}>
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default App;
