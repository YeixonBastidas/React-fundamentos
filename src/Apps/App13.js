import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ProtalModal extends Component {
    state = {  }
    render() {
        return createPortal(
        (
            <div><h1> {this.props.children}</h1></div>
        ),
            document.getElementById('modal-root')
        );
    }
}

class App13 extends Component {
    state = {  }
    render() {
        return (
            <div>
                <ProtalModal>
                    Hi world!!
                </ProtalModal>
            </div>
        );
    }
}

export default App13;