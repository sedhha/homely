import type { NextPage } from 'next';
import Link from 'next/link';

import Header from 'src/components/header';
const MyPosts: NextPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>My Job Posts</h1>
        <table className='table table-hover'>
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
                <Link href={'/'}>Edit</Link>
              </th>
              <th>
                <button className='btn btn-primary'>Check Applications</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyPosts;
