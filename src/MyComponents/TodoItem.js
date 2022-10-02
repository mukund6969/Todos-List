import { makeStyles } from '@material-ui/core'
import React from 'react'

export const TodoItem = ({todo, onDelete}) => {

    const useStyles = makeStyles(()=>({
        Item:{
            scrollBehavior:"smooth",
            margin: 10,
        },
        desc:{
            color: "white",
        }
    }))
    const classes = useStyles();
    return (
     
        <div className={classes.Item}>
           <h4>{todo.title}</h4>
           <p className={classes.desc}>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
      
    )
}
