import type { NextPage } from 'next';
import Header from 'src/components/header';
import { useAppSelector, useAppDispatch } from '@redux-store/hooks';
import { Input, Button } from '@chakra-ui/react';

const profile: NextPage = () => {
  const { authToken, isLoggedIn } = useAppSelector((state) => state.user);
  return (
    <>
      <Header />
      <div className='container-lg'>
        <h1>Profile</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <Input
              placeholder="Leave in blank if you don't want to update your name"
              type='text'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Email address</label>
            <Input
              type='email'
              className='form-control'
              placeholder="Leave in blank if you don't want to update your email"
            />
          </div>

          <div className='form-group'>
            <label>Number</label>

            <Input
              type='tel'
              className='form-control'
              placeholder="Leave in blank if you don't want to update your phone number"
            />
          </div>

          <div className='form-group'>
            <label>Non Profit Organization</label>
            <input
              placeholder='Please enter the organizations separated by comma'
              type='text'
              className='form-control'
            />
          </div>
          <br />

          <Button
            borderRadius={0}
            type='submit'
            variant='solid'
            colorScheme='teal'
            width='full'>
            {' '}
            Update Profile
          </Button>
        </form>
      </div>
    </>
  );
};

export default profile;
