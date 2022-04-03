import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/header";

const IndexPage: NextPage = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJ1c2VyVHlwZSI6IkFkbWluIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hvbWVseS1kYjhlMiIsImF1ZCI6ImhvbWVseS1kYjhlMiIsImF1dGhfdGltZSI6MTY0ODk2NTY5MywidXNlcl9pZCI6ImoweUZ5eXVTbzRkTUxNejNmQ2lQS25zSWxuOTIiLCJzdWIiOiJqMHlGeXl1U280ZE1MTXozZkNpUEtuc0lsbjkyIiwiaWF0IjoxNjQ4OTY1NjkzLCJleHAiOjE2NDg5NjkyOTMsImVtYWlsIjoid2FuZ25lbHNvbjJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIndhbmduZWxzb24yQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzbStJl4Qbxt3PA4805wGbv9y86HjDuECkcHolL_eoOUDcC-GWJub64iaiihmnKpzGIp-pZUl9XOHgqKyMDLoQboPT7oes3krRiWUBtjoeKMojQy1a_Gz1Re7l42ZQWVPsSfAZI8sIQpOxHWNRPK0s1fTTnc5QAYB1xx5TlYOeWeeG8Hf7lhKzrkexF5EgewSCpNlmHQDZG-DGnCZ2pA4I6WCnkkAHJC107inlUW93kP-EHbw-8VDkyMjCP9R08y2Vhms1ac7Hbf7YdhVIzjyub1Xf_2_2wZTQllWJIRqcQxddCDrba8gG_SkQ9RvILgoRHTUP3tk__ZmcI4-v4gdw",
      }),
    };

    fetch("http://localhost:3000/api/get-available-jobs", requestOptions).then(
      (res) => res.json().then((data) => setJobList(data["payload"]))
    );
  }, []);

  function handleApplyJob() {}

  return (
    <>
      <Header />
      <div className="container-lg">
        <br />
        <h1>Job List</h1>
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
                    <button className="btn btn-outline-primary">Apply</button>
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
