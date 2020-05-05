let movieData = [];

let title = "harry";

const getData = async () => {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=d033b518&t=" + title
  );
  const data = await response.json();
  return data;
};

const dataAssignment = () => {
  getData().then((data) => {
    movieData = data;
    console.log(movieData.Writer);
  });
};

export { dataAssignment };
