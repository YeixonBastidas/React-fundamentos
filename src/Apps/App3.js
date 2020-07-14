import React from 'react';

const Gato = (props) => (
    <div>
        <h1>Gato</h1>
        <pre>
            { JSON.stringify(props, null, 4) }
        </pre>
    </div>
)

class App3  extends React.Component {

    render() {
        const otrosDatos = {
            raza: 'tropical',
            peleasNocturnas: 300
        }

        return (
            <div>
                <Gato
                    name= 'Garfield'
                    age='2 años'
                    {...otrosDatos}
                />
            </div>
        )
    }

}

export default App3;

