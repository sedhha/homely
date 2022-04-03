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
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useAppSelector } from '@redux-store/hooks';
import Client from '@fb-client';
import {
  FirebaseUserType,
  firebaseUsers,
} from '@homely-interfaces/Firebase/Auth';
import { useRouter } from 'next/router';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CMdEmail = chakra(MdEmail);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const { authToken } = useAppSelector((state) => state.user);
  const [mounted, setMounted] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState(firebaseUsers.jobSeeker);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const navigateToLogin = () => router.push('/login');

  const toast = useToast();

  useEffect(() => {
    return () => setMounted(false);
  }, []);

  const registerUser = () => {
    setLoading(true);
    Client.registerFirebaseUser(
      email,
      password,
      value as FirebaseUserType
    ).then((response) => {
      if (response.error) {
        setLoading(false);
        toast({
          title: 'Registration Failure',
          description: 'Registration Failed. ' + response.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Registration Success',
          description: 'You are now registered with Homely! Go to Login Page',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
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
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CMdEmail color='gray.300' />}
                  />
                  <Input
                    type='email'
                    placeholder='email address'
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction='row' alignItems='center'>
                    <Text fontSize='lg' fontWeight={400}>
                      I am a
                    </Text>
                    <Radio value={firebaseUsers.jobSeeker}>Homeless</Radio>
                    <Radio value={firebaseUsers.employer}>Provider</Radio>
                  </Stack>
                </RadioGroup>
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
                  onClick={registerUser}
                  width='full'>
                  Login
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already a User?{' '}
        <Link color='teal.500' onClick={navigateToLogin}>
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default App;
