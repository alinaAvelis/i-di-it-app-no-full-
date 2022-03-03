import React from 'react';
import ToDoListItem from '../to-do-list-item/toDoListItem';

// import './to-do-list.css'
// import ToDoListItem from '../to-do-list-item';
// import DeleteItem from '../delete-item';
// import ReturnButton from '../return-button';

export const ToDoList = ({dataOfLists, listId}) => {
    // const classOfDel = delBoxClass;
    const elements = dataOfLists.map((item) => {
        if(item.isCategory) {
            item.list.forEach(point => {
              if(point.id === listId) {
                point.list.map((itemOfList) => {
                    return <li>{itemOfList.label}</li>
                }
                )
              }
            })
          } else {
            if(item.id === listId) {
              item.list.map((itemOfList) => {
                return <li>{itemOfList.label}</li>
                }
            )
            }
          }
        // if(item.id === postId) {
        //     const {id, label} = item.list;
        //     return (<li className="to-do-list-item" key={id}>
        //         <ToDoListItem
        //             id={id}
        //             label={label}
        //             /></li>)
        //   } else if(item.list.id === postId){
        //       const {id, label} = item.list.list;
        //       return ( <li className="to-do-list-item" key={id}>
        //     <ToDoListItem
        //         id={id}
        //         label={label}
        //         /></li>)
        //   }
        // return (
        //     <li className="to-do-list-item" key={id}>
        //         <ToDoListItem
        //             // {...itemProps}  
        //             // classOfDel = {delBoxClass}
        //             // onToggleChecking={() => onToggleChecking(id)}
        //             // onToggleDeleting={() => onToggleDeleting(id)}
        //             /></li>
        // )
    });
    return (
        <div >
            {/* <div className="flex short-width">
                <DeleteItem classBtn={deleteClass} onDelete={onDelete}/>
                <ReturnButton classBtn={deleteClass}/>
            </div> */}

            <ol className="to-do-list">
                {elements}
            </ol>
        </div>
       
    )
}
