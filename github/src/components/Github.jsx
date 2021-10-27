// import {Res} from "../utils/request";
import {axios} from "axios";
import "./git.css";

import {useState, useEffect} from "react";


export const Github = () => {
    const [text, setText] = useState("");
    // const [query, setQuery] = useState("");
    const [res, setRes] = useState([]);

    const handleSearch = async () => {
      let res = await  fetch(`https://api.github.com/search/users?q=${text}`)
      let data = await res.json();
    //   console.log(data);
      setRes(data.items);
      console.log(data.items);
      console.log(res);
        // const {items} = await axios.get("https://api.github.com/search/users", {
        //     params: {
        //         q : text
        //     }
        // })
    }
        

    // const getData = () => {

    // }
    


    return (
        <div>
            <div>
                <input type = "text" value = {text} placeholder = "Search what you want" onChange = {(e) => {
                    setText(e.target.value);
                }} />
                <button onClick = {handleSearch}>Search</button>
            </div>
            <div className = "show-data">
                {
                    res.map((e) => (
                        <div className = "show" key = {e.id}>
                           {e.login}
                        </div>
                    ))
                }
            </div>

        </div>
    ) 
}