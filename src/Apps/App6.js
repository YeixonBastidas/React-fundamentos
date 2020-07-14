import React from 'react';

class App6 extends React.Component {
    
    manejador = (e) => {
        e.preventDefault();

        console.log(e.nativeEvent)
    }

    render() {
        return(
            <div>
            <a href="http://google.com"
                onClick={ this.manejador }
            >Google</a>    
            
            </div>
        )
    }
}

 export default App6