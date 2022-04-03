import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '@redux-store/hooks';
import Client from '@fb-client';

const Links = [
  {
    label: 'Job List',
    comparitor: 'joblist',
  },
  {
    label: 'Profile',
    comparitor: 'profile',
  },
  {
    label: 'Create Jobs',
    comparitor: 'employer/create-jobs',
  },
  {
    label: 'My Job Posts',
    comparitor: 'employer/my-posts',
  },
  {
    label: 'Applications',
    comparitor: 'applications',
  },
];

const NavLink = ({
  children,
  isActive,
  href,
  router,
}: {
  children: ReactNode;
  isActive?: boolean;
  href?: string;
  router: (url: string) => void;
}) => {
  return (
    <div
      className={isActive ? 'activeNavLink' : 'inactiveNavLink'}
      onClick={() => router(href ?? '/providers')}>
      {children}
    </div>
  );
};

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { email } = useAppSelector((state) => state.user);

  const navigateToCallback = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NextLink href='/' passHref>
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    position: 'relative',
                  }}>
                  <Image
                    alt='Homely'
                    src={'/logo.svg'}
                    layout='fill'
                    objectFit='contain'
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </NextLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink
                  key={link.comparitor}
                  router={navigateToCallback}
                  href={`/${link.comparitor}`}
                  isActive={router.pathname.includes(link.comparitor)}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex
            alignItems={'center'}
            onClick={() => {
              () => router.push('/login');
            }}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={() => {
                Client.auth.signOut();
                router.push('/login');
              }}
              rightIcon={<ArrowForwardIcon />}>
              Log Out
            </Button>
            <Avatar size={'sm'} src={`https://i.pravatar.cc/150?u=${email}`} />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.comparitor}
                  router={navigateToCallback}
                  href={`/${link.comparitor}`}
                  isActive={router.pathname.includes(link.comparitor)}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
