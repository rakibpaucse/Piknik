import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const list = [
  "DJ Party",
  "Swimming Pool",
  "Launch",
  "Cultural Program",
  "Raffle Draw"
];
let i = 0;

const useStyles = makeStyles(theme => ({
    textRotator:{
        backgroundColor: '#2f3640',
        height: '100%',
        fontSize: 64,
        display: 'flex',
        justifyContent: 'center'
        
    },
    picnic:{
        fontFamily: "'Carter One', cursive",
        color: '#fff',
        backgroundColor: '#2f3640',
        display: 'inline-block',
        width: '40%',
        textAlign: 'center',
    },
    msg:{
        fontFamily: "'Oleo Script Swash Caps', cursive;",
        backgroundColor: '#22272f',
        color: '#f1c40f',
        display: 'inline-block',
        width: '60%',
        padding: '0px 30px'
    }
}))

const TextRotator = () => {
  const classes = useStyles();
  const [msg, setMsg] = useState(list[i]);
  useInterval(() => {
    if (i > (list.length-1)) {
      i = 0;
    }
    setMsg(list[i]);
    i++;
  }, 1000);
  return (
    <div className={classes.textRotator}>
        <span className={classes.picnic} > <h5>#PICNIC</h5> </span>
        <span className={classes.msg} > <h5>{msg}</h5> </span>
    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default TextRotator;
