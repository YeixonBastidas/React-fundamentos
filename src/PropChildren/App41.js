import React from 'react';
import { Counter, Title, Button} from './Components/Counter';

const App41 = () =>(
    <div>
        <Counter>
            <Button type='decrement'/> 
            <Button type='increment'/> 
            <Title>
                {
                    (click) => (
                        <div>
                            <h1>
                                {click}
                            </h1>
                        </div>
                    )
                }
            </Title>
        </Counter>
    </div>
)


export default App41;