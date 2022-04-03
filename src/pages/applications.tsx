import type { NextPage } from 'next';
import Header from 'src/components/header';

import JobFields from '../mocks/jobFields.json';

const Applications: NextPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>My Applications</h1>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {JobFields.map((jobfield, id) => (
              <tr key={id}>
                <th>{jobfield.jobTitle}</th>
                <th>{jobfield.description}</th>
                <th>{new Date(jobfield.deadline).toDateString()}</th>

                <th>{'PENDIENT'}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Applications;
