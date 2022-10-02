import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'


export const Footer = () => { 
    const useStyles = makeStyles(()=>({
        footer:{
            width: "100%",
            alignItems:"center",
            display:"flex",
            height: "15vh",
            fontFamily:"montserrat",
            textAlign:"center",
            paddingLeft:550,
            fontVariant:"h5",
            paddingTop:25,
        },
        text:{
         color: "gold",
          fontFamily: "Montserrat",
       fontWeight: "bold",
       cursor: "pointer",
        }
    }))

    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography className={classes.text}>
                Created by Mukund
            </Typography>
        </div>
    )
}
