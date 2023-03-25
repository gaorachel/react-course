import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID dhyzgUytjP1m6vMHvmibWyZY-WIyprPoYuxsx8pqI4s",
    },
    params: { query: term },
  });

  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
