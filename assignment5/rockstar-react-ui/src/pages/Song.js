import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => {
    return {
      root: {
        height: 'inherit'  
      }
    }
  })

const Song = (props) => {

    const location = useLocation();
    const classes = useStyles();
    const songPath = location.pathname;
    const { songName, webappUrl, webapiUrl } = props;
    const [songLyrics, setSongLyrics] = useState('');
    const [showLyrics, setShowLyrics] = useState(false);
    const [sentiment, setSentiment] = useState('');
    const [showSentiment, setShowSentiment] = useState(false);

    useEffect(() => {
        setShowLyrics(false);
        setShowSentiment(false);

        const getSongLyrics = async () => {
            const res = await axios.get(`${webapiUrl}/Music${songPath}`);
            const lyrics = res.data;
            setSongLyrics(lyrics);   
        }

        getSongLyrics();
    }, [songPath]);

    function buttonShowLyrics() {
        setShowSentiment(false);
        setShowLyrics(true);       
    }

    async function analyseSong() {      
        fetch(`${webappUrl}/sentiment`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    sentence: songLyrics,
                }) 
            })
            .then(response => response.json())
            .then(data => {
                setShowLyrics(false);
                setShowSentiment(true);
                setSentiment(data.polarity);
            });
    }

    const renderUI = () => {
        if (showLyrics) {
            return <div dangerouslySetInnerHTML={{__html: songLyrics}} />;
        }

        if (showSentiment) {
            return <div dangerouslySetInnerHTML={{__html: sentiment}} />;
        }

        return null;
    }

    return (
        <div className={classes.root}>   
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                {songName}
            </Typography>
            <br />
            {/* <img src={`../images/${songName}.jpg`} alt={songName} height="300px" width="300px"/>  */}
            <br />
            <br />
            <Button variant="contained" onClick={buttonShowLyrics}>Get Lyrics</Button>
            <Button variant="contained" onClick={analyseSong}>Get Sentiment</Button>
            <br />
            <br />
            {renderUI()}
        </div>
        
    );
};

export default Song;
