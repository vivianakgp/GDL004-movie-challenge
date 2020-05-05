let movieArray = ["Star Wars", "Harry Potter", "Game of Thrones"];
let randomNumber = Math.floor(Math.random() * movieArray.length - 1) + 1;
let randomMovie = movieArray[randomNumber];

const getData = async () => {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=d033b518&t=" + encodeURI(randomMovie)
  );
  const data = await response.json();
  return data;
};

export { getData, randomMovie };
