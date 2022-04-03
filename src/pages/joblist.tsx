import type { NextPage } from "next";
import Header from "../components/header";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="container-lg">
        <Header />
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
            <tr>
              <th>Sample Job</th>
              <th>Sample Description</th>
              <th>Tomorrow</th>
              <th>
                <button className="btn btn-outline-primary">Apply</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IndexPage;
