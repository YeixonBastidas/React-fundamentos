import React, { Component } from 'react';

class App10 extends Component {
    state = { 
        marcado: `
                <h1>Iyectando HTML</h1>
                <br/>
                <hr/>
                <a href="#"> Link </a> 
            `
     }
    render() {
        return (
            <div>
                <div
                    dangerouslySetInnerHTML={{__html: this.state.marcado}}
                >

                </div>
            </div>
        );
    }
}

export default App10;