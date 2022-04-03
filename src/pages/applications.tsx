import type { NextPage } from "next";
import Header from "src/components/header";
import { Text } from "@chakra-ui/react";
import JobFields from "../mocks/jobFields.json";

const Applications: NextPage = () => {
  console.log(JobFields);

  return (
    <>
      <Header />
      <br />
      <div className="container">
        <Text fontSize="6xl">My Applications</Text>
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
                <th>{new Date(jobfield.deadline).toLocaleDateString()}</th>
                
                <th>{"PENDIENT"}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Applications;
