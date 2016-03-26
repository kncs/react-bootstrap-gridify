import React from 'react';
import ReactDOM from 'react-dom';

import Gridify from '../src/Gridify';

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
  render() {
    return (
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '50px'}}>{'A Simple example with \"columns\" property set to {xs:3, sm:8, lg:12}'}</h2>
        <Gridify columns={{xs:3, sm:8, lg:12}} components={buidComponentsList()}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
