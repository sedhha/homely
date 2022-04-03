import type { NextPage } from "next";

const EditJob: NextPage = () => {
  return (
    <>
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
          Create Job Description
        </button>
      </form>
    </>
  );
};

export default EditJob;
