import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const errorMessage = "I didn't find any pictures...:( ";
//const breed = "beagle";
const url="https://dog.ceo/api/breed/hound/images/random";

//console.log(url);


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      breed: '',
      images: []
    };
  }

  /*this.searchBreed = this.searchBreed.bind(this);*/
  handleClick = () => {
    console.log('this is:', this);
  }

  searchBreed(breed) {
    return !this.state.results[breed];
  }



  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            images: result.images,
            imageSrc: result.message
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
        <div className="App">
           <div className="Container">
                <div className="App-header">
                  <h1><span className="HeaderSpan">Dog</span>App</h1>
                </div>
                <div className="Search">
                    <form onSubmit={this.props.onSubmit} id="search" className="SearchForm">
        				<input type="search" className="SearchInput" placeholder="Breed name" />
                        <button className="SearchBtn" type="submit" onClick={this.handleClick}>
                            SEARCH
                        </button>
        		    </form>
                    <img src={this.state.imageSrc} />
                </div>
            </div>
          </div>
    );
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {errorMessage}</div>;
  } else if (!isLoaded) {
      return <div>Loading...</div>;
  } else {
/*      return (
        <ul>
        (image, index)=><Image  key={index} {...image} />
          {images.map(item => (
            <li key={image.index}>
              {image.index}
            </li>
          ))}



        </ul>
    );*/
    }
  }
}

export default App;
