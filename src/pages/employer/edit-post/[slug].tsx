import type { NextPage } from "next";
import DatePicker from "react-datepicker";
import Header from "../../../components/header";
import {Button} from "@chakra-ui/react"

const EditPost: NextPage = () => {
  const deadline = 1649083773000;
  return (
    <>
      <Header />
      <br />
      <div className="container">
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
            <label>Work Hours</label>
            <input type="text" className="form-control" value={"10"} />
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <DatePicker
              selected={new Date(deadline)}
              onChange={(date: Date) => {}}
            />
          </div>
          <br />

          
          <Button
            borderRadius={0}
            type='submit'
            variant='solid'
            colorScheme='teal'
            width='full'>
            {' '}
            Update Job Post
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
