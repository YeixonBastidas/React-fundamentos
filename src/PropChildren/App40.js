import React, {Component} from 'react';
import './Global.css';
import { render } from '@testing-library/react';


class Parent extends Component  {
    render() {
        const {children : ch} = this.props;
        // se usa cuando se envian varios parametros en los children, itera cada paraemtro que llego
        const children = React.Children.map(ch, (params, index)=> {
          if(index === 1){
            return params;
          }            
        });

        return(
            <div className='box'>
                <div className='box blue'>
                    {children}
                </div>
                <div className='box red'>
    
                </div>
            </div>
        )
    }    
}

class App40 extends Component {
    state = {  }
    render() {
        return (
           <div>
               <Parent>
                   Hijo texto
                   {`la suma es : ${5 + 5}`}
               </Parent>
           </div> 
        );
    }
}

export default App40;