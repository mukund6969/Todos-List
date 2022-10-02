import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "20vh",
        margin: "30px auto",
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3" style={{fontfamily:"montserrat"}}>Questions List:</h3>
            {props.todos.length===0? "Hurray!! You have solved all the problems":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
