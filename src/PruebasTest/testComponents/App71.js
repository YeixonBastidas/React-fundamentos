import React from 'react';

export const Title = () =>(
    <h1>Introduccion a Unit Testing</h1>
)

const App71 = () => {
    return (
        <section id='main'>            
            <Title/>
            <div className='container'>
                <span num={3} active={false}>Primero</span>
                <span num='3' active={'false'}>Segundo</span>
            </div>
            <input type='test' />
            <div>
                <p>Fuera</p>
            </div>
            
            <br />

        </section>
    )
}

export default App71;