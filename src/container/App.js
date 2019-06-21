import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { Robots } from './Robots';
import './App.css';
import { setSearchField, requestRobots } from '../action';


const mapStateProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    Robots: state.requestRobots.Robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
 
  
  componentDidMount() {
    this.props.onRequestRobots();

  }

  render() {
    const { searchField, onSearchChange, Robots, isPending } = this.props
    const filteredRobots = Robots.filter(Robot => {
      return Robot.name.toLowerCase().includes(searchField.toLowerCase());
  
    })
    
    return isPending ? 
     <h1>Loading</h1> :
     (
        <div className="tc">
          <h1 className='f1'>RoboPals</h1>
          <SearchBox SearchChage={onSearchChange}/>
          <Scroll>
            <CardList Robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }

 
}


export default connect(mapStateProps, mapDispatchToProps)(App);
