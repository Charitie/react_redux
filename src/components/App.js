import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
// import { Robots } from './Robots';
import '../container/App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Robots: [],
      searchfield: ''
    }

  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=> this.setState({ Robots: users }));

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
  }

  render() {
    const { Robots, searchfield } = this.state;
    const filteredRobots = Robots.filter(Robot => {
      return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
  
    })
    
    return !Robots.length ? 
     <h1>Loading</h1> :
     (
        <div className="tc">
          <h1 className='f1'>RoboPals</h1>
          <SearchBox SearchChage={this.onSearchChange}/>
          <Scroll>

            <ErrorBoundary>
              <CardList Robots={filteredRobots}/>
            </ErrorBoundary>
            
          </Scroll>
        </div>
      );
    }

 
}


export default App;
