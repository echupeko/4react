import React from 'react';

class Header extends React.Component{

    state = {
        visibleFormes: 'hidden'
    };

    getvisible = () => {
        this.setState({visibleFormes: this.props.Visite})
    }

    render() {
        return (
            <div style={{visibility: this.getvisible, border: 'solid 1px #4b4b4b', position: 'absolute'}}>
                <input value={'1'}></input>
                <input value={'2'}></input>
                <input value={'3'}></input>
            </div>
        )
    }
}

export default Header