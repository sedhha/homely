import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { useAppSelector, useAppDispatch } from "@redux-store/hooks";

const IndexPage: NextPage = () => {
  const [jobList, setJobList] = useState([]);
  const { authToken, isLoggedIn } = useAppSelector((state) => state.user);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: authToken,
      }),
    };

    fetch("http://localhost:3000/api/get-available-jobs", requestOptions).then(
      (res) => {
        res.json().then((data) => setJobList(data["payload"]));
        console.log(res);
      }
    );
  }, []);

  function handleApplyJob() {}

  return (
    <>
      <Header />
      <div className="container-lg">
        <p>{authToken}</p>
        <br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {jobList.length > 0 ? (
              jobList.map((job) => (
                <tr>
                  <th>{job["jobTitle"]}</th>
                  <th>{job["description"]}</th>
                  <th>{job["deadline"]}</th>
                  <th>
                    {isLoggedIn ? <button className="btn btn-outline-primary">Apply</button> : <></>}
                    
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
