import React from 'react';
import ReactDOM from 'react-dom';

import Gridify from '../index';

let brands = [
  {icon : 'fa-github', name : 'Github'},
  {icon : 'fa-facebook', name : 'Facebook'},
  {icon : 'fa-reddit', name : 'Reddit'},
  {icon : 'fa-google', name : 'Google'},
  {icon : 'fa-apple', name : 'Apple'},
  {icon : 'fa-youtube', name : 'Youtube'},
  {icon : 'fa-twitter', name : 'Twitter'},
  {icon : 'fa-slack', name : 'Slack'},
  {icon : 'fa-linkedin', name : 'Linkedin'},
  {icon : 'fa-tripadvisor', name : 'Tripadvisor'},
  {icon : 'fa-steam', name : 'Steam'},
  {icon : 'fa-vine', name : 'Vine'},
  {icon : 'fa-paypal', name : 'Paypal'},
  {icon : 'fa-skype', name : 'Skype'}
];

function buidComponentsList() {
  return brands.reduce(function(previous, brand) {
    let className = 'fa '+ brand.icon +' fa-stack-1x fa-inverse';
    previous.push(
      <div style={{textAlign: 'center'}}>
        <span className="fa-stack fa-2x">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={className}></i>
        </span>
        <p>{brand.name}</p>
      </div>
    );
    return previous;
  }, []);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      columns : 3
    };
  }

  substract() {
    let self = this;
    return function(event) {
      event.preventDefault;
      if(self.state.columns > 1) {
        self.setState({columns : self.state.columns - 1});
      }
    };
  }

  add() {
    let self = this;
    return function(event) {
      event.preventDefault;
      if(self.state.columns < 12) {
        self.setState({columns : self.state.columns + 1});
      }
    };
  }

  renderColumnSelection() {
    return (
      <div className="row" style={{margin:'20px'}}>
        <h3 className="col-xs-6" style={{margin:'0'}}>{'How many columns would you like sir?'}</h3>
        <div className="col-xs-2 input-group">
          <span className="input-group-btn">
            <button
                className="btn btn-default"
                onClick={this.substract()}
                type="button"
            >
              {'-'}
            </button>
          </span>
          <input disabled type="text" className="form-control" value={this.state.columns}/>
          <span className="input-group-btn">
            <button
                className="btn btn-default"
                onClick={this.add()}
                type="button"
            >
              {'+'}
            </button>
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderColumnSelection()}
        <Gridify columns={this.state.columns} components={buidComponentsList()}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
