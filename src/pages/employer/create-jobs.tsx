import type { NextPage } from "next";
import Header from "src/components/header";
import { Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

function handleCreateJob() {}

const EditJob: NextPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <Text fontSize="6xl">Create Job</Text>
        <br />
        <form>
          <div className="form-group">
            <label>Job Title</label>
            <Input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <Input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription}
            />
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <Input
              type="text"
              className="form-control"
              value={deadline}
              onChange={(e) => setDeadline}
            />
          </div>
          <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
          >
            Post Job
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditJob;
