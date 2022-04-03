import type { NextPage } from "next";

const MyPosts: NextPage = () => {
  return (
    <>
      <h1>My Job Posts</h1>
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
              <button className="btn btn-primary">Edit</button>
            </th>
            <th>
              <button className="btn btn-primary">Check Applications</button>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MyPosts;
