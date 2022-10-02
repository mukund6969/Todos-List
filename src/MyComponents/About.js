import { makeStyles } from '@material-ui/core'
import React from 'react'


export const About = () => {
    

const useStyles = makeStyles(()=>({
       about:{
          fontFamily:"montserrat",
          height: "100vh",
          scrollBehavior:"smooth",
          
       }
}))
const classes = useStyles();

    return (
        <div className={classes.about}>
            This is A ToDos List App.
            <p>You can list here all your todos task and delete once when it's done.</p>
        </div>
    )
}
