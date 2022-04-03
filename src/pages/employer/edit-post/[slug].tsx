import type { NextPage } from "next";
import DatePicker from "react-datepicker";

const EditPost: NextPage = () => {

  const deadline = 1649083773000; 
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
          <input type="text" value={"Sample Description"}  className="form-control" />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input type="text" className="form-control" value={"Tomorrow"} />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input type="text" className="form-control" value={"10"} />
        </div>
        <div className="form-group">
            <label>Deadline</label>
            <DatePicker
              selected={deadline}
              onChange={(date: Date) => {
              }}
            />
          </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditPost;
