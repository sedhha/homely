import type { NextPage } from 'next';
import Header from 'src/components/header';
import { Input, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppSelector, useAppDispatch } from '@redux-store/hooks';

const EditJob: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [workHours, setWorkHours] = useState('');
  const [capacity, setCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const { authToken, isLoggedIn } = useAppSelector((state) => state.user);

  function handleCreateJob(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // e.preventDefault();
    console.log(new Date(deadline).getTime());
    console.log(title);
    console.log(description);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: authToken,
        jobTitle: title,
        description,
        deadline: new Date(deadline).getTime(),
        maxCapacity: capacity,
        applied: 0,
        location,
        workHours,
      }),
    };

    fetch('http://localhost:3000/api/add-job', requestOptions).then((res) => {
      res.json().then((data) => console.log(data));
    });
  }
  return (
    <>
      <Header />
      <div className='container'>
        <Text fontSize='6xl'>Create Job</Text>
        <br />
        <form onSubmit={handleCreateJob}>
          <div className='form-group'>
            <label>Job Title</label>
            <Input
              type='text'
              className='form-control'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Description</label>
            <Input
              type='text'
              className='form-control'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Work Hours</label>
            <Input
              type='text'
              className='form-control'
              value={workHours}
              onChange={(e) => setWorkHours(e.target.value)}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Applicants Capacity</label>
            <Input
              type='text'
              className='form-control'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Location</label>
            <Input
              type='text'
              className='form-control'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <br />
          <div className='form-group'>
            <label>Deadline</label>
            <DatePicker
              selected={deadline}
              onChange={(date: Date) => {
                setDeadline(date);
              }}
            />
          </div>
          <br />
          <Button
            borderRadius={0}
            type='submit'
            variant='solid'
            colorScheme='teal'
            width='full'>
            Post Job
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditJob;
