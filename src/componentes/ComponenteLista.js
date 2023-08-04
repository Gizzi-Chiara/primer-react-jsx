import React from "react";

class ComponenteLista extends React.Component {
    render () {
        return (
            <div className="card">
            <h2>Thinds I need to do:</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a Marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </div>
        )
    }
} 

export default ComponenteLista;