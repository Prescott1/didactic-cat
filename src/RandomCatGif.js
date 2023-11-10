import React, { useState } from "react";
import axios from "axios";
const RandomCatGif = () => {
  const [gifUrl, setGifUrl] = useState("");
  const fetchGif = async () => {
    try {
      const response = await axios.get("https://cataas.com/api/cats", {
        params: { tag: "orange", mime_types: "gif" },
      });
      const randomGif =
        response.data[Math.floor(Math.random() * response.data.length)];
      setGifUrl(`https://cataas.com/cat/${randomGif.id}`);
    } catch (error) {
      console.error("Error fetching cat gif:", error);
    }
  };
  return (
    <div>
      {" "}
      <button onClick={fetchGif}>Show Random Cat Gif</button>{" "}
      {gifUrl && <img src={gifUrl} alt="Random Cat Gif" />}{" "}
    </div>
  );
};
export default RandomCatGif;
