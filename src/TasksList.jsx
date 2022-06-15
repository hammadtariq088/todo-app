import React from 'react';

const TasksList = ({items, id, onDelete}) => {

    return (
        <>
           <li className="list-item" key={id}>{items}</li>
           <button className="delete-btn" onClick={()=> onDelete(id)}><i className="material-icons delete-icon">cancel</i></button>
        </>
    )

}
export default TasksList;
