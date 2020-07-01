import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({shoes: data})
    })
  }

  handleLikes(props) {
    console.log(props)
  }
  
  render() {
      return (
      <div className="App">
        <header className="App-header">
          <h1>Qu33n B's Shoe Store</h1>
          <ul>
            <p>Shoe Brand/Size</p>
            {this.state.shoes.map(p => {
              console.log(p)
              return (<li>{p.brand}/{p.size}</li>
                        <p>{p.manufacturer</p>)
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
