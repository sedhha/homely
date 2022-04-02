import type { NextPage } from "next";

const profile: NextPage = () => {
  return (
    <>
      <h1>Profile</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Number</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Non Profit Organization</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default profile;
