import React, {Component} from 'react';

export default class ToDoListItem extends Component {


  // onCheck() {
  //   this.setState(({checking}) => ({
  //     checking: !checking
     
  //   }))
  // }

  // onDelete() {
  //   this.setState(({deletting}) => ({
  //     deletting: !deletting
  //   }))
  // }

  render() {
    const {label} = this.props;
    // let labelClass = "list-item-label";
    // let checkClass = "list-item-check-pseudo";
    // let deletteClass = "list-item-delette-pseudo";

    // if(checking) {
    //   labelClass += ' checking-label';
    //   checkClass += ' list-item-check';
    // }

    // if(deletting) {
    //   deletteClass += ' list-item-del';
    // }

    return (
    // item;
      <div>
        <div >
            <span  role="checkbox" aria-checked="true"
            //  onClick={onToggleDeleting}
             >
              <input className="list-item-delette-input  hide" type="checkbox" name="listItemDelette"/>
            </span>
        </div>
        <label  htmlFor="listItemCheck"><span className="list-item-text">{label}</span>
        <span  role="checkbox" aria-checked="true"
        //  onClick={onToggleChecking}
         >
          <input className="list-item-check  hide" type="checkbox" name="listItemCheck"/></span>
        </label>
      </div>
    )
    
  }
}
