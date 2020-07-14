import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {    
    static propTypes = {
        name: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string
    }

    static defaultProps = {
        email : 'yeison.b.b@hotmail.com'
    }

    render() {
        const { name, bio, email } = this.props
        return (
            <div>
                <h1>{name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        );
    }
}

class App14 extends Component {
    state = {  }
    render() {
        return (
          <div>
              <Profile 
                name='Yeixon Bastidas'
                bio='soy un desarrollador FullStack'               
              />
          </div>  
        );
    }
}

export default App14;