import React from 'react';

class Contador extends React.Component {
    state = {
        video: {
            title: 'Super video',
            likes: 0
        }
    }
    add = () => {
        this.setState((state) => ({
            video : {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render() {
        return(
            <div>
                <h1>
                    { this.state.video.title }
                </h1>
                <button onClick={this.add}>
                    Likes: ({ this.state.video.likes })
                </button>
            </div>
        )
    }
}

const App2 = ()=> (
    <div>
        <Contador />
    </div>
)

export default App2
