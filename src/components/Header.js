import React from 'react';

const styles = {
    container:{
        display: 'block',
        margin: '0 auto',
        height: '50px',
        width: '70%',
        backgroundColor: 'green'
    }
};

class Header extends React.Component{
    render() {

        return (
            <div style={styles.container}>ToDo List</div>
        )
    }
}

export default Header