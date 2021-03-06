import React, { Component } from 'react';

class Rank extends Component{
  constructor(){
    super();
    this.state = {
      emoji: ''
    }
  }

  generateEmoji = (entries)=>{
    fetch(`https://s99ukyaenb.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(response => response.json())
      .then(data => this.setState({emoji: data.input}))
      .catch(console.log)
  }
  componentDidMount(){
    this.generateEmoji(this.props.entries)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null
    }
    this.generateEmoji(this.props.entries)
  }

  render(){
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}
        </div>
        <div className='white f3'>
          {`Rank Badge: ${this.state.emoji}`}
        </div>
      </div>
    );
  }
} 

export default Rank;