import type { NextPage } from 'next';
import Link from 'next/link';

import { Text } from "@chakra-ui/react";

import Header from "src/components/header";
const MyPosts: NextPage = () => {
  return (
    <>
      <Header />
      <br />
      <div className="container">
        <Text fontSize="6xl">My Job Posts</Text>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Sample Job</th>
              <th>Sample Description</th>
              <th>Tomorrow</th>
              <th>
                <Link href="edit-post/32">Edit</Link>
              </th>
              <th>
                <Link href="post/32">Check Applications</Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyPosts;
