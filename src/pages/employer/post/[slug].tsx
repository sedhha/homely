import type { NextPage } from "next";

const Post: NextPage = () => {
  return (
    <>
      <h1>Edit Job Description</h1>
      <form>
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" value={"Sample Job"} className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={"Sample Description"}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input type="text" value={"4.4.2022"} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Post;
