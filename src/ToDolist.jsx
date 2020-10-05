import React from 'react';

const ToDolist = (props) => {

    
     return(
         <>
         <div className='todo_style'>
         <i class="fa fa-trash" aria-hidden="true"
             onClick={() => {
                 props.onSelect(props.id);
             }}
         />
      <li> {props.text} </li>;
      </div>
      </>
     );
};




export default ToDolist;