import React from 'react'

const Scroll = (props) => {

    return (
        <div className = 'bt bw1 b--light-blue' style = {{overflowY: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;