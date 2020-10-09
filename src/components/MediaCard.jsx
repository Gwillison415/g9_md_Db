import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "./Rating";
import moment from "moment";
import { axiosInstance } from "../utils/api";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "left",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  imagePlaceholder: {
    display: "flex",
    minHeight: 100,
    minWidth:150,
    backgroundColor:  'lightgrey'
  },
  container:{
    padding:16,
    backgroundColor: 'white'
  }
}));

export default function MediaCard({
  backdrop_path,
  poster_path,
  vote_average,
  overview,
  release_date,
  vote_count,
  original_title,
  id
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [image, setImage] = useState(null)
  const year = moment(release_date, 'YYYY-MM-DD').format('YYYY') 
useEffect( () => {
   async function fetchData() {
     const response = await axiosInstance.get(`/movie/${id}/images`);
     // never did get any images back but the plan would be to destructure the properties and use them
     // for CardMedia aspectratio file_path width hieght
   }
  fetchData();

}, [id])
// const image = backdrop_path? backdrop_path: poster_path
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <div className={classes.imagePlaceholder}>
          {image && (
            <CardMedia
              className={classes.cover}
              image={image}
              title="Live from space album cover"
            />
          )}
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.root} component="h5" variant="h5">
              {original_title}
            </Typography>
            <Typography
              className={classes.root}
              variant="caption"
              color="textSecondary"
            >
              {year}
            </Typography>
            <Typography
              className={classes.root}
              variant="subtitle2"
              color="textSecondary"
            >
              {overview}{" "}
            </Typography>
          </CardContent>
          <Rating voteCount={vote_count} voteAverage={vote_average}></Rating>
          <div className={classes.controls}></div>
        </div>
      </Card>
    </div>
  );
}
