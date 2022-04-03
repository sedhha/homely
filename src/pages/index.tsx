import type { NextPage } from "next";

import Header from "src/components/header";
import { Text } from "@chakra-ui/react";



const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <br />
      <div className="container">
        <Text fontSize="6xl">Welcome Page</Text>
      </div>
    </>
  );
};

export default IndexPage;
