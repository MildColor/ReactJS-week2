import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import MovieHeader from "../components/header/MovieHeader";
import MovieList from "../components/list/MovieList";

function Movies() {
  return (
    <StBox>
      <Layout>
        <MovieHeader />
        <MovieList />
      </Layout>
    </StBox>
  );
}

export default Movies;

const StBox = styled.div`
  background-color: #f38181;
  display: flex;
  justify-content: center;
`;
