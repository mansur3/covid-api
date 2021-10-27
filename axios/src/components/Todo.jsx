import {useState, useEffect} from "react";
import {posts} from "../util/request";
import "./todo.css";

import {axios} from "axios";


function Todo() {
    const [text, setText] = useState("");
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
    }, [page])
    const getData = async () => {
      const {data} =   await posts.get("/posts", {
          params: {
              _page: page,
              _limit: 3
          }
      });
      setPost(data);
      
      
    }

    const handleAdd = async () => {
        // setTodos(...todos, text);
       await posts.post("/posts", {
           title : text,
           status : false
       });
       getData();
    }

    // const handleDelete =  (ida) => {
    //      posts.delete("/posts", {
    //         params : {
    //             id : ida
    //         }
    //     })
    //     getData();
    // }
    


    return (
        <div>
            <div className = "input-container">
                <input className = "input" onChange = {(e) => {setText(e.target.value)}} type = "text" placeholder = "enter rthe text" />
                <button className = "add" onClick = {handleAdd} >Add</button>
            </div>
            <div className = "show">
                <ul>
               { post.map((e) => (
                    <div className = "data" key = {e.id}>
                        
                      <li>  {e.title}</li>
                      <hr />
                      {/* <button onClick = {() => { 
                          handleDelete(e.id);
                      }}>Delete</button> */}
                        
                        </div>
                ))}
                </ul>
                <div>
                    <button onClick = {() => (setPage( page - 1))}>Prev</button>
                    <button onClick = {() => (setPage( page + 1))}>Next</button>
                </div>
            </div>
        </div>
    )
}

export {Todo};