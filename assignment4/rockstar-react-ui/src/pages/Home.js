import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => {
    return {
      flexButton: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'  ,
        justifyContent: 'space-evenly'
      },
      textBox: {
          textAlign: 'center',
          background: '#e8eaf6',
      },
      text: {
        padding: '10px 10px',
        color: 'black',
        fontSize: '20px',
      }
    }
  })
const HomePage = (props) => {

    const classes = useStyles()

    const [value, setValue] = useState('');
    const [showValue, setShowValue] = useState(false);

    useEffect(() => {
        setShowValue(false);
     }, []);

    function callPython() {
        axios.get(`http://localhost:5002/health`)
        .then(res => {
            setValue(res.data);
            setShowValue(true);
        });
    }

    function callJava() {
        axios.get(`http://localhost:8080/health`)
        .then(res => {
            setValue(res.data);
            setShowValue(true);
        });
    }

    function callDotnet() {
        axios.get(`http://localhost:5001/health`)
        .then(res => {
            setValue(res.data);
            setShowValue(true);
        });
    }


    return (
        <div>  

            <div className={classes.flexButton}>
                <Button variant="contained" onClick={callPython}>Python API</Button>
                <Button variant="contained" onClick={callJava}>Java API</Button>
                <Button variant="contained" onClick={callDotnet}>Dotnet API</Button>
            </div>

            <br/>
            <br/>

            <div className={classes.textBox}>
            { showValue ? <div className={classes.text}dangerouslySetInnerHTML={{__html: value}} /> : null }
            </div>

        </div>
        
    );

}

export default HomePage;