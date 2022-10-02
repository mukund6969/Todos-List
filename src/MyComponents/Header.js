import React from 'react'
import './header.css';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { makeStyles, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function Header(props) {
   const history = useHistory();
  const useStyles = makeStyles(()=>({
          title:{
             flex: 1,
         color: "gold",
          fontFamily: "Montserrat",
       fontWeight: "bold",
       cursor: "pointer",
  
          },

          header:{
            backgroundColor: "#14161a",
            color:"dark-grey",
          },
          about:{
            color: "gold",
            fontFamily: "Montserrat",
            cursor: "pointer",
              fontWeight: "bold",
              "&:hover": {
            backgroundColor: "#131111",
            color:"white",
      },
          }
  }))
  const classes= useStyles();

    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-info" className={classes.header}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div style={{display:"flex", }}>
            <Typography className={classes.title} variant="h6" style={{paddingTop:30, paddingLeft:20}}>
              {props.title}
            </Typography >
            <Typography className={classes.about} style={{paddingTop:20, paddingRight:20}} >
                <Link to="/about">
              About
              </Link>
            </Typography>
            </div>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                {/* <Typography color='white'>
                  About
                </Typography> */}
              </li>  
            </ul>
            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: ""}
          </div>
        </div>
      </nav>
     
    )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}