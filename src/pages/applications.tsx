import type { NextPage } from "next";
import Header from "src/components/header";

import JobFields from "../mocks/jobFields.json";

const Applications: NextPage = () => {
  console.log(JobFields);

  return (
    <>
      <Header />
      <h1>My Applications</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {JobFields.map((jobfield) => (
            <tr>
              <th>{jobfield.jobTitle}</th>
              <th>{jobfield.description}</th>
              <th>{jobfield.deadline}</th>
              <th>{jobfield.status ? jobfield.status : "PENDIENT"}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Applications;
