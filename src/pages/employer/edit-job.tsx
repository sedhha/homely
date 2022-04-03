import type { NextPage } from "next";

import Header from "src/components/header";
const EditJob: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Edit Job Description</h1>
      <form>
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditJob;
