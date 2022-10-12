import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//8a7f3661b129d3334ad1a5ba059fe560
function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async / await
  const getMovies = async () => {
    const response = await fetch(
      `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=8a7f3661b129d3334ad1a5ba059fe560&targetDt=20120101`
    );

    const json = await response.json();

    setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

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

  console.log(movies);
  return (
    <ListdUl>
      <Wrapli>
        <div>{loading ? <h1>Loading...</h1> : null}</div>
      </Wrapli>
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

const Wrapli = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
