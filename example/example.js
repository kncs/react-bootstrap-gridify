import React from 'react';
import ReactDOM from 'react-dom';

import Gridify from '../index';


function buidComponentsList() {
  return [
    <h2 key="1">{'Titre 1'}</h2>,
    <h2 key="2">{'Titre 2'}</h2>,
    <h2 key="3">{'Titre 3'}</h2>,
    <h2 key="4">{'Titre 4'}</h2>,
    <h2 key="5">{'Titre 5'}</h2>,
    <h2 key="6">{'Titre 6'}</h2>,
    <h2 key="7">{'Titre 7'}</h2>,
    <h2 key="8">{'Titre 8'}</h2>,
    <h2 key="9">{'Titre 9'}</h2>,
    <h2 key="10">{'Titre 10'}</h2>,
    <h2 key="11">{'Titre 11'}</h2>,
    <h2 key="12">{'Titre 12'}</h2>
  ];
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Gridify columns={4} components={buidComponentsList()}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
