import type { NextPage } from "next";
import Header from "src/components/header";

const Applications: NextPage = () => {
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
          <tr>
            <th>Sample Job</th>
            <th>Sample Description</th>
            <th>Tomorrow</th>
            <th>Status</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};


export default Applications;