import React from 'react'

class App extends React.Component {
    constructor(){
        super(props)
        this.state = {
            text: 'hello world！'
        }
    }
    render(){
        let {text} = this.state;
        return (
            <div className="app-container">
                <p>{ text }</p>
            </div>
        )
    }
}

export default App