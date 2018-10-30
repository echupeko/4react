import React from 'react';

class TodoItem extends React.Component {


    render() {
        return (
            <div style={{display: 'flex'}} onChange={this.props.titleChangeHandle}>
                <input style={{width: '10px', height: '10px'}} type="checkbox" value={this.props.checkTaskProps}></input>
                <div style={{display: 'flex', flexDirection: 'column'}}>{this.props.titleTaskProps}</div>
                <div style={{display: 'flex', flexDirection: 'column'}}>{this.props.descriptionTasksProps}</div>
                <div style={{display: 'flex', flexDirection: 'column'}}>{this.props.importanceTaskProps}</div>
                <div style={{display: 'flex', flexDirection: 'column'}}></div>
                <div style={{display: 'flex', flexDirection: 'column'}}></div>
            </div>
        )

    }
}

export default TodoItem;