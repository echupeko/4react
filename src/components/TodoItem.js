import React from 'react';

class TodoItem extends React.Component {


    render() {
        return (
            <div style={{display: 'flex'}} onChange={this.props.titleChangeHandle}>
                <input className="check" style={{width: '20px', height: '20px'}} type="checkbox" value={this.props.checkTaskProps}></input>
                <div className="title" style={{display: 'flex', flexDirection: 'column'}}>{this.props.titleTaskProps}</div>
                <div className="description" style={{display: 'flex', flexDirection: 'column'}}>{this.props.descriptionTaskProps}</div>
                <div className="importance" style={{display: 'flex', flexDirection: 'column'}}>{this.props.importanceTaskProps}</div>
                <div className="date" style={{display: 'flex', flexDirection: 'column'}}>{new Date(this.props.dateDeadline).toDateString()}</div>
                <div className="date" style={{display: 'flex', flexDirection: 'column'}}>{new Date(this.props.dateCompleted).toDateString()}</div>
            </div>
        )

    }
}

export default TodoItem;