import type { NextPage } from "next";

const EditJob: NextPage = () => {
  return (
    <>
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
      </form>
    </>
  );
};

export default EditJob;
