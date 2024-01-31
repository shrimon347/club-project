/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404! Not Found</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Back Home</Link>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
  min-height: 90vh;
  display: grid;
  place-items: center;
  background: hsl(186, 100%, 94%);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: hsl(209, 34%, 30%);;
    margin-bottom: 1.5rem;
  }
`;
export default Error;
