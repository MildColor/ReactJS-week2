import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addMovies } from "../../redux/modules/movies";
import MovieTable from "../todo/MovieTable";

//8a7f3661b129d3334ad1a5ba059fe560

function MovieList() {
  const movieList = useSelector((state) => state.movies.movieList);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // async / await
  const getMovies = async () => {
    for (let i = 1; i < 11; i++) {
      const json = await (
        await fetch(
          `		http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=8a7f3661b129d3334ad1a5ba059fe560&curPage=${i}`
        )
      ).json();
      dispatch(addMovies(json.movieListResult.movieList));
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movieList);
  return (
    <ListdUl>
      {loading ? "Loading..." : <MovieTable movieList={movieList}></MovieTable>}
    </ListdUl>
  );
}

export default MovieList;

const ListdUl = styled.ul`
  .list-name {
    color: ${(props) => props.theme.lightlime};
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  width: 100%;
`;

// promise
//   useEffect(() => {
//     fetch(
//       `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=8a7f3661b129d3334ad1a5ba059fe560&targetDt=20120101`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
//         setLoading(false);
//       });
//   }, []);

// function MovieList() {
//   const movieList = useSelector((state) => state.movies.movieList);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   // async / await
//   const getMovies = async () => {
//     for (let i = 1; i < 11; i++) {
//       const json = await (
//         await fetch(
//           `		http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=8a7f3661b129d3334ad1a5ba059fe560&curPage=${i}`
//         )
//       ).json();
//       dispatch(addMovies(json.movieListResult.movieList));
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);
