import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import { useAppSelector } from '@redux-store/hooks';
import { Box, Spinner } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
  const [jobList, setJobList] = useState([]);
  const { authToken, isLoggedIn } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (isLoggedIn) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: authToken,
        }),
      };

      fetch('http://localhost:3000/api/get-available-jobs', requestOptions)
        .then((res) => {
          res
            .json()
            .then((data) => {
              setJobList(data['payload']);
              setLoading(false);
            })
            .catch((error) => setLoading(false));
        })
        .catch((error) => setLoading(false));
    }
  }, [isLoggedIn, authToken]);

  return (
    <>
      <Header />
      <div className='container-lg'>
        {/* <p>{authToken}</p> */}
        <br />
        {loading ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
            }}>
            <Spinner size='xl' />
          </div>
        ) : (
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {jobList.length > 0 ? (
                jobList.map((job, key) => (
                  <tr key={key}>
                    <th>{job['jobTitle']}</th>
                    <th>{job['description']}</th>
                    <th>{job['deadline']}</th>
                    <th>{job['location']}</th>
                    <th>
                      {isLoggedIn ? (
                        <button className='btn btn-outline-primary'>
                          Apply
                        </button>
                      ) : (
                        <></>
                      )}
                    </th>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default IndexPage;
