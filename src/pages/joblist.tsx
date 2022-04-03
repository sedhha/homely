import type { NextPage } from "next";
import Header from "../components/header";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Job List</h1>
      <div className="container-lg">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Sample Job</th>
              <th>Sample Description</th>
              <th>Tomorrow</th>
              <th>
                <button className="btn btn-primary">Apply</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IndexPage;
