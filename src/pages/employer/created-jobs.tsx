import type { NextPage } from "next";

import Header from "src/components/header";

const EditJob: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Create Job</h1>
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
          Post Job
        </button>
      </form>
    </>
  );
};

export default EditJob;
