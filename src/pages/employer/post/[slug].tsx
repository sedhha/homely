import type { NextPage } from "next";
import Header from "../../../components/header";

const Post: NextPage = () => {
  return (
    <>
      <Header />
      <br />
      <div className="container">
        <h1>Check Aplications Details</h1>
        <p>1 Person Applied</p>
        <li>You applied to this position</li>
      </div>
    </>
  );
};

export default Post;
