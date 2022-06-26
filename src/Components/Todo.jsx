import React from "react";
import { useState } from "react";

const Todo = () => {
    const [inp,setInp]=useState("");
    const [items,setItems]=useState([]) 
    const addItem=()=>{
       if(inp){
        setItems([...items,inp]);
        setInp("");
       }
       else{
        alert("Field is Empty")
       }
    }
    function deleteItem(id){
         const updatedValue=items.filter((elem,ind)=>{
             return id!==ind;
         })
         setItems(updatedValue)
    }
  return (
    <div id="body">
      <div id="taskList">
        <span id="bold">Task</span>
        <span id="light">List</span>
      </div>
      <div>
        <input type="text" placeholder="✍️ Write here" id="inp" value={inp} 
        onChange={(e)=>{setInp(e.target.value)}} />
        <span className="material-icons" id="indexIcon" onClick={addItem}>
          add_circle
        </span>
      </div>
      <div id="parent">
        {
            items.map((element,index)=>{
                return(
                    <div className="child" key={index}>
                        <div id="el-div">
                            {element}
                        </div>
                        <div id="del-div"><span className="material-icons" id="del" onClick={()=>deleteItem(index)}>delete_forever</span></div>
                </div>
                )
            })
        }
      </div>
      <div id="clr-btn" onClick={()=>setItems([])}><span>Clear All</span><span className="material-icons">clear_all</span></div>
    </div>
  );
};

export default Todo;
