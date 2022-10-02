import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    const useStyles = makeStyles(()=>({
   addtodo:{
    scrollBehavior:"smooth",
    fontFamily:"motserrat",
   
   },
   add:{
    textAlign:"center",
    color:"white",
   }
    }))
    const classes= useStyles();
    return (
        <div className="container my-3" className={classes.addtodo}>
            <h3 className="text-center" my-3> Wanna add some more questions? Add here!!</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name of the Question</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Coding Platform</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className={classes.add}>
                <button type="submit" className="btn btn-sm btn-success">Add Question</button>
                </div>
            </form>
        </div>
    )
}
