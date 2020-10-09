import React, {useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import moment from "moment";
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
  const year = moment(release_date, 'YYYY-MM-DD').format('YYYY') 
// useEffect(() => {
//   effect
//   return () => {
//     cleanup
//   }
// }, [input])
console.log('year', year)
const image = backdrop_path? backdrop_path: poster_path
console.log('image', image)
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
            <Typography className={classes.root} variant="caption" color="textSecondary">
              {year}
            </Typography>
            <Typography className={classes.root} variant="subtitle2" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}></div>
        </div>
      </Card>
    </div>
  );
}
