import React from 'react'
import MediaCard from "./MediaCard";
import { connect } from "react-redux";
// {adult: false;
// backdrop_path: null;
// genre_ids: (2)[(16, 35)];
// id: 62967;
// original_language: "en";
// original_title: "The Lady and the Reaper";
// overview: "A sweet old lady is living alone in her farm, waiting for the arrival of death to meet her beloved husband again. One night, while sleeping, her life fades out and she is invited to cross death's door. Bue when she is about to do so, the old lady wakes up inside a hospital's ward: and arrogant doctor has taken her back to life and he will fight hard against death to recover the old lady's life at any cost.";
// popularity: 3.362;
// poster_path: "/lBSeKa7RR4Ry48JvRVwi3Dc9KKh.jpg";
// release_date: "2009-10-01";
// title: "The Lady and the Reaper";
// video: false;
// vote_average: 7;
// vote_count: 45;}


// {adult: false;
// backdrop_path: "/taTfDPndJVYUKXkd5bVgmj96I1.jpg";
// genre_ids: [16];
// id: 536482;
// original_language: "xx";
// original_title: "Reaper";
// overview: "There was once a bounty hunter so skilled at taking his preys life, that people called him the Reaper. He was a legend, until he found the love of his life and retired. But one day he found his wife dead, killed by a group of fanatics.";
// popularity: 0.6;
// poster_path: null;
// release_date: "2017-01-01";
// title: "Reaper";
// video: false;
// vote_average: 0;
// vote_count: 0;}
export  function SearchResults({results}) {
    return (
        <>
            {results.map((cardProps,idx) =>{
               return <MediaCard key={idx} {...cardProps}></MediaCard>;
            })}
        </>
    )
}

const mapStateToProps = (state) => ({
    results:state.search.results
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);