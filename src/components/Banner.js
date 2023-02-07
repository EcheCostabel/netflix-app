import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import instance from "../axios";
import Baanner from "../img/banner.jpeg";
import requests from "../Requests";
import axios from "axios";

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      console.log(request.data)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        position: "relative",
        height: "440px",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
          <Typography
            style={{ wordWrap: "break-word" }}
            variant="h6"
            className={classes.description}
          >
            {truncate(movie?.overview, 160)}
          </Typography>
          <div className={classes.fadeBottom}></div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  buttons: {
    "& button": {
      cursor: "pointer",
      padding: '(8px,32px,8px,32px)',
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      marginRight: "1rem",
      backgroundColor: "rgba(51, 51, 51, 0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: 99,
    backgroundImage:
      "linear-gradient(160deg, transparent, rgba(37,37,37,0.61), #111)",
  },
}));

export default Banner;
