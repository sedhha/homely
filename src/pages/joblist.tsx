import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { useAppSelector, useAppDispatch } from "@redux-store/hooks";
import { Input, Button, Text } from "@chakra-ui/react";
const IndexPage: NextPage = () => {
  const [jobList, setJobList] = useState([]);
  const { authToken, isLoggedIn } = useAppSelector((state) => state.user);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: authToken,
      }),
    };

    fetch('http://localhost:3000/api/get-available-jobs', requestOptions).then(
      (res) => {
        res.json().then((data) => setJobList(data['payload']));
        console.log(res);
      }
    );
  }, []);

  function handleApplyJob() {}

  return (
    <>
      <Header />
      <div className="container-lg">
        <Text fontSize="6xl">Job List</Text>
        {/* <p>{authToken}</p> */}
        <br />
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
                      <button className="btn btn-outline-primary">Apply</button>
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
      </div>
    </>
  );
};

export default IndexPage;
