import React from 'react';

class TodoItem extends React.Component {



    render() {
        return (
            <div style={{display: 'flex'}}>
                <div className="check-list"><input  style={{width: '20px', height: '20px'}} type="checkbox" ></input></div>
                <div className="title-list" style={{display: 'flex', flexDirection: 'column'}}>{this.props.titleTask}</div>
                <div className="description-list" style={{display: 'flex', flexDirection: 'column'}}>{this.props.descriptionTask}</div>
                <div className="importance-list" style={{display: 'flex', flexDirection: 'column'}}>{this.props.importanceTask}</div>
                <div className="date-deadline-list" style={{display: 'flex', flexDirection: 'column'}}>{this.props.dateDeadline}</div>
                <div className="date-completed-list" style={{display: 'flex', flexDirection: 'column'}}>{this.props.dateCompleted}</div>
            </div>
        )

    }
}

export default TodoItem;